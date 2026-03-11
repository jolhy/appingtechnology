import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const routes = [
  "/",
  "/about",
  "/services",
  "/ai-marketing",
  "/professional-training",
  "/careers",
  "/contact",
  "/legal",
  "/technology-voucher",
];

async function prerender() {
  // SSR bundle already built by `vite build --ssr` in the build script
  const serverEntry = pathToFileURL(path.resolve(rootDir, "dist-ssr/entry-server.js")).href;
  const { render } = await import(serverEntry);

  // Read the HTML template produced by the client build
  const template = fs.readFileSync(
    path.resolve(rootDir, "dist/index.html"),
    "utf-8"
  );

  console.log("🖨  Pre-rendering routes...");

  for (const route of routes) {
    try {
      const { html: appHtml, helmet } = render(route);

      let pageHtml = template;

      // Inject rendered app HTML into the root div
      pageHtml = pageHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Inject helmet head tags (title, meta, link canonical, og, twitter)
      if (helmet) {
        const headTags = [
          helmet.title?.toString() ?? "",
          helmet.meta?.toString() ?? "",
          helmet.link?.toString() ?? "",
        ]
          .filter(Boolean)
          .join("\n  ");

        if (headTags) {
          // Remove all tags that helmet will re-inject to avoid duplicates
          pageHtml = pageHtml.replace(/<title>[^<]*<\/title>/, "");
          pageHtml = pageHtml.replace(/<meta\s+name="description"[^>]*>/gi, "");
          pageHtml = pageHtml.replace(/<meta\s+name="keywords"[^>]*>/gi, "");
          pageHtml = pageHtml.replace(/<link\s+rel="canonical"[^>]*>/gi, "");
          pageHtml = pageHtml.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, "");
          pageHtml = pageHtml.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, "");
          pageHtml = pageHtml.replace("</head>", `  ${headTags}\n</head>`);
        }
      }

      // Write to dist/<route>/index.html  (root stays at dist/index.html)
      const outputPath =
        route === "/"
          ? path.resolve(rootDir, "dist/index.html")
          : path.resolve(rootDir, "dist", route.slice(1), "index.html");

      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, pageHtml);

      console.log(`  ✓ ${route}`);
    } catch (err) {
      console.error(`  ✗ ${route} — ${err.message}`);
    }
  }

  // Clean up SSR build artifacts
  fs.rmSync(path.resolve(rootDir, "dist-ssr"), { recursive: true, force: true });

  console.log("\n✅ Pre-rendering complete!\n");
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});

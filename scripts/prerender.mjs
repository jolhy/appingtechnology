import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

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
  console.log("\n📦 Building SSR bundle...");

  await build({
    configFile: path.resolve(rootDir, "vite.config.ts"),
    build: {
      ssr: path.resolve(rootDir, "src/entry-server.tsx"),
      outDir: path.resolve(rootDir, "dist-ssr"),
      rollupOptions: { output: { format: "esm" } },
    },
    logLevel: "warn",
  });

  // Dynamically import the rendered entry (use file:// URL for Windows compatibility)
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
          // Remove the generic <title> from index.html
          pageHtml = pageHtml.replace(/<title>[^<]*<\/title>/, "");
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

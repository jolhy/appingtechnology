import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
}

const BASE_URL = "https://apping.biz";

const SEO = ({ title, description, keywords, canonical, ogImage }: SEOProps) => {
  const fullCanonical = canonical.startsWith("http") ? canonical : `${BASE_URL}${canonical}`;
  const fullOgImage = ogImage
    ? ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`
    : `${BASE_URL}/og-default.jpg`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
    </Helmet>
  );
};

export default SEO;

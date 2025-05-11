import React from "react";
import { Helmet } from "react-helmet";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image?: string;
  lang?: string;
}

const Seo: React.FC<SeoProps> = ({
                                   title,
                                   description,
                                   keywords = "Smart Solutions Capital, 聪达资本, SSC, ssc, Capital Solutions, Finance, Toronto, 贷款， 多伦多, 多伦多贷款",
                                   url,
                                   image = "https://ssc.finance/content/images/landing_page.jpeg",
                                   lang = "en",
                                 }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Smart Solutions Capital",
    alternateName: "SSC, 聪达资本",
    url,
  };

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="zh_CN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default Seo;

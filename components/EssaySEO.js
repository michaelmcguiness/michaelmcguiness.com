import React from "react";
import { NextSeo, ArticleJsonLd } from "next-seo";

const EssaySEO = ({ title, summary, publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `https://michaelmcguiness.com${image}`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – Michael McGuiness`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [featuredImage],
        }}
        twitter={{
          handle: "@mikemcg0",
          site: "@mikemcg0",
          cardType: "summary_large_image",
        }}
      />
      <ArticleJsonLd
        authorName="Michael McGuiness"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Michael McGuiness"
        title={title}
        url={url}
      />
    </>
  );
};

export default EssaySEO;

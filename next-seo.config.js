const title = "Michael McGuiness";
const description = "Programmer, writer, and creator living in New York City.";

const SEO = {
  title,
  description,
  canonical: "https://michaelmcguiness.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://michaelmcguiness.com",
    title,
    description,
    images: [
      {
        url: "https://michaelmcguiness.com/static/images/main.jpg",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@m_mcguin",
    site: "@m_mcguin",
    cardType: "summary",
  },
};

export default SEO;

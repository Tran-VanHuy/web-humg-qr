import React from "react";
// import { Helmet } from "react-helmet"


function SEO({ title, urlKey, image,content ,keyword }) {
      
  return (
      <>
        <title>{title} | Humg </title>
        <meta property="og:title" content={title} />
        <meta property="og:url" content={urlKey} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={content} />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height"  content="480" />
        <meta property="og:image:height"  content="480" />
        <meta name="keywords" content={keyword ?? ''} />
        <meta http-equiv="content-language" content="vi" />
        <meta name="robots" content="noodp,index,follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Drivadz" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@huy1821051049" />
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={content} />
        <meta name="twitter:image" content={image} />
      </>
  );
}

export default SEO;
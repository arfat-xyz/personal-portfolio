import Head from "next/head";
import React from "react";

export const ArfatMeta = ({ value }) => {
  console.log(value);
  return (
    <>
      <Head>
        <link rel="icon" href="https://i.ibb.co/RHyk2rm/Arfatur-Rahman.jpg" />
        <title>
          {value && value + " -- "} Arfat Rahman: MERN Developer in Bangladesh
        </title>
        <meta
          name="description"
          content="Looking for a top MERN developer in Chittagong, Bangladesh? Arfat Rahman has 3 years of experience and 20+ successful projects in his portfolio."
        />
        <meta
          name="keywords"
          content="Arfat, arfat rahman, Arfat Rahman, MERN, developer, ReactJS, NextJS, Sanity, Node, MongoDB, ExpressJS, HTML, CSS, JavaScript, WordPress, Bootstrap, Tailwind, Material UI, DaisyUI, web development, custom web applications, WordPress websites"
        />

        <meta
          property="og:image"
          content="https://i.ibb.co/RHyk2rm/Arfatur-Rahman.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="author" content="arfat rahman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="generator" content="WordPress 5.8" />
        <meta name="theme-color" content="#000000" />
        <meta name="rating" content="General"></meta>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ID}');`,
          }}
        />
      </Head>
    </>
  );
};

import React from 'react';
import Head from 'next/head';

// eslint-disable-next-line react/prop-types
export default function MetaTags({ image }) {
  return (
    <Head>
      <meta property="og:url" content="https://aluraquiz.italocarlo06.vercel.app/" key="url" />
      <meta property="og:image" content={image} key="image" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Quiz App about Mandalorian" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://aluraquiz.italocarlo06.vercel.app/" />
      <meta property="twitter:title" content="The Mandalorian" />
      <meta property="twitter:description" content="" />
      <meta property="twitter:image" content={image} />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

      <title> Alura Quiz - The Mandalorian </title>
    </Head>

  );
}

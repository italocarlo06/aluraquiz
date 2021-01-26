import React from 'react';
import ReactMetaTags from 'react-meta-tags';
import Head from 'next/head';

export default function MetaTags({ image }) {
  return (
    <Head>
        <meta property="og:url" content="https://aluraquiz.italocarlo06.vercel.app/" key="url" /> 
        <meta property="og:image" content={image} key="image" />      
        <meta property="og:type" content="website"></meta>
        <meta property="og:description" content="Quiz App about Mandalorian"></meta>
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz.italocarlo06.vercel.app/" />
        <meta property="twitter:title" content="The Mandalorian" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content={image} />
    </Head>
    
  );
}
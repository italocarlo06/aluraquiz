import React from 'react';
import ReactMetaTags from 'react-meta-tags';

export default function MetaTags({ image }) {
  return (
    <div>
      <ReactMetaTags>
         <meta property="og:type" content="website" />
         <meta property="og:url" content="https://aluraquiz.italocarlo06.vercel.app/" />
         <meta property="og:title" content="The Mandalorian" />
         <meta property="og:description" content="" />
         <meta property="og:image" content={image} />        
      </ReactMetaTags>
    </div>
  );
}
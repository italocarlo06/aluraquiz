import React from 'react';
import ReactMetaTags from 'react-meta-tags';

export default function MetaTags({ image }) {
  return (
    <div>
      <ReactMetaTags>
         <meta property="og:image" content={image} />
      </ReactMetaTags>
    </div>
  );
}
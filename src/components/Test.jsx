import React from 'react';
import { Helmet } from 'react-helmet';

const Test = () => {
  return (
    <div>
      <Helmet>
        <title>Dynamic Page Title</title>
        <meta property="og:title" content="some title" />
        <meta property="og:description" content="some description" />
        <meta property="og:image" content="https://somecuteimage.jpg" />
        <meta property="og:url" content="https://amaldeeppatra.vercel.app" />
      </Helmet>
      <h1>Hello World!</h1>
    </div>
  );
};

export default Test;

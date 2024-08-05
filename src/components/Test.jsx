import React from 'react';
import { Helmet } from 'react-helmet';

const Test = () => {
  return (
    <div>
      <Helmet>
        <title>Dynamic Page Title</title>
        <meta property="og:title" content="Dynamic Page Title" />
        <meta property="og:description" content="A brief description of this page." />
        <meta property="og:image" content="https://yourapp.com/path/to/dynamic-image.jpg" />
        <meta property="og:url" content="https://yourapp.com/dynamic-page" />
      </Helmet>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default Test;

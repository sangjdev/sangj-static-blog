import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';

const layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sangj blog</title>
      </Helmet>
      {children}
    </div>
  );
};

export default layout;

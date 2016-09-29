import React from 'react';

const Layout = ({content = () => null}) => (
  <section id="public-body">
    {content()}
  </section>
);

export default Layout;

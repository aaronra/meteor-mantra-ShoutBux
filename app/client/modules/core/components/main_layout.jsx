import React from 'react';

const Layout = ({header = () => null, content = () => null}) => (
  <section id="body">
    {header()}
    <div className="container">
      {content()}
    </div>
  </section>
);

export default Layout;

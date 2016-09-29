import React from 'react';

const Layout = ({header = () => null}, {content = () => null}, {footer = () => null}) => (
  <section id="body">
    {header()}
    {content()}
    {footer()}
  </section>
);

export default Layout;

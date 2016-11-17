import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Header from './components/header';
import Home from './components/home';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/dashboard', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        header: () => (<Header />),
        content: () => (<Home />)
      });
    }
  });
}

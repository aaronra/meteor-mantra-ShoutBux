import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from './components/main_layout.jsx';
import Home from './containers/home';
import {accessControl} from '/client/utils/access-control/access-control';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const DashboardRoutes = FlowRouter.group({
    prefix: '/dashboard',
    name: 'dashboard',
    triggersEnter: [(context, redirect)=> {
      accessControl.isLoggedIn('dashboard', redirect);
    }]
  });


  DashboardRoutes.route('/', {
    name: 'home.dashboard',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });
  DashboardRoutes.route('/:userId', {
    name: 'home.dashboard.user',
    action(params) {
      mount(MainLayoutCtx, {
        content: () => (<Home userId={params.userId}/>)
      });
    }
  });

}

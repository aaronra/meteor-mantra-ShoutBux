import React from 'react';
import {mount} from 'react-mounter';

import PublicLayout from '/client/modules/core/components/public_layout.jsx';
import PublicLanding from './components/public_landing';

export default function (injectDeps, {FlowRouter}) {
  const PublicLayoutCtx = injectDeps(PublicLayout);

  FlowRouter.route('/', {
    name: 'public.landing',
    action() {
      mount(PublicLayoutCtx, {
        content: () => (<PublicLanding />)
      });
    }
  });
}

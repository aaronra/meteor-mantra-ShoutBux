import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Shouter from '../shouter.jsx';

storiesOf('users.Shouter', module)
  .add('default view', () => {
    return (
      <Shouter />
    );
  })

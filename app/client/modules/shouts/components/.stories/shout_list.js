import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ShoutList from '../shout_list.jsx';

storiesOf('shouts.ShoutList', module)
  .add('default view', () => {
    return (
      <ShoutList />
    );
  })

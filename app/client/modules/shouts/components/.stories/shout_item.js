import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ShoutItem from '../shout_item.jsx';

storiesOf('shouts.ShoutItem', module)
  .add('default view', () => {
    return (
      <ShoutItem />
    );
  })

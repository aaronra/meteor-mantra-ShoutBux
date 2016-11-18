import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Friends from '../friend_list.jsx';

storiesOf('users.Friends', module)
  .add('default view', () => {
    return (
      <Friends />
    );
  })

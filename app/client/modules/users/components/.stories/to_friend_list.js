import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ToFriendList from '../to_friend_list.jsx';

storiesOf('users.ToFriendList', module)
  .add('default view', () => {
    return (
      <ToFriendList />
    );
  })

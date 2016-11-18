import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Button from '../button.jsx';

storiesOf('users.Button', module)
  .add('default view', () => {
    return (
      <Button />
    );
  })

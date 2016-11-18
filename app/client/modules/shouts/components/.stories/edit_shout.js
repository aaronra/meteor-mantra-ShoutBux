import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import EditShout from '../edit_shout.jsx';

storiesOf('shouts.EditShout', module)
  .add('default view', () => {
    return (
      <EditShout />
    );
  })

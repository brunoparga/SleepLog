import React from 'react';

import SmallButtonsView from '../styles/SmallButtonsView';

import ShareButton from './ShareButton';
import DeleteButton from './DeleteButton';

function AwakeButtons(): JSX.Element {
  return (
    <SmallButtonsView>
      <ShareButton />
      <DeleteButton />
    </SmallButtonsView>
  );
}

export default AwakeButtons;

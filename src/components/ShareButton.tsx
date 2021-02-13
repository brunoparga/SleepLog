import React from 'react';

import { share } from '../fileOps';
import SmallButton from '../styles/SmallButton';

function ShareButton(): JSX.Element {
  return <SmallButton onPress={share} title={'Share logs'} />;
}

export default ShareButton;

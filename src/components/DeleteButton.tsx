import React from 'react';

import { writeEmpty } from '../fileOperations';
import SmallButton from '../styles/SmallButton';

function DeleteButton(): JSX.Element {
  return <SmallButton onPress={writeEmpty} title={'Delete logs'} />;
}

export default DeleteButton;

import React from 'react';
import { Alert } from 'react-native';

import { writeEmpty } from '../fileOperations';
import SmallButton from '../styles/SmallButton';
import { ToDelete } from '../types';

function DeleteButton({ numberOfEntries, setEntries }: ToDelete): JSX.Element {
  function deleteEntries() {
    writeEmpty();
    setEntries([]);
  }

  function confirmDelete() {
    return Alert.alert(
      'Delete entries?',
      `You are about to delete ${numberOfEntries} entries.`,
      [
        { text: 'Cancel', onPress: () => undefined },
        // eslint-disable-next-line putout/putout -- wanted to rename function to "onPress"
        { text: 'OK', onPress: deleteEntries },
      ]
    );
  }

  return <SmallButton onPress={confirmDelete} title={'Delete logs'} />;
}

export default DeleteButton;

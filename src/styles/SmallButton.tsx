import React from 'react';
import { ButtonProps } from 'react-native';
import { Button } from 'react-native-elements';

function SmallButton(props: ButtonProps): JSX.Element {
  const buttonStyle = { height: 90, width: 90 };
  const titleStyle = { fontSize: 20 };

  return (
    <Button buttonStyle={buttonStyle} titleStyle={titleStyle} {...props} />
  );
}

export default SmallButton;

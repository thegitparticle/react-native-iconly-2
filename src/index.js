import React from 'react';
import IcomoonConfig from '../assets/iconly/selection.json';
import MyIcon from 'react-native-custom-icon';

function Iconly2(props) {
  return (
    <MyIcon
      name={props.Name}
      color={props.Color}
      size={props.Size}
      config={IcomoonConfig}
    />
  );
}

export default Iconly2;

// export default {
//   multiply(a: number, b: number) {
//     return Promise.resolve(a * b);
//   },
// };

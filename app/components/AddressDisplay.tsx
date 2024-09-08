import React, {FC} from 'react';
import Address from '../types/Address';
import {StyleSheet, Text, View} from 'react-native';
import inlineAddress from '../utils/inlineAddress';

interface Props {
  prefix?: boolean | string;
  address: Address;
}

const AddressDisplay: FC<Props> = ({prefix, address}) => {
  if (prefix === true) {
    prefix = 'Address: ';
  }

  return (
    <View style={styles.root}>
      {prefix ? <Text>{prefix}</Text> : undefined}
      <Text>{inlineAddress(address)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
});

export default AddressDisplay;

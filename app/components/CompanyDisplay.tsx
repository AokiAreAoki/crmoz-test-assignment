import React, {FC} from 'react';
import Company from '../types/Company';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  prefix?: boolean | string;
  company: Company;
}

const CompanyDisplay: FC<Props> = ({prefix, company}) => {
  if (prefix === true) {
    prefix = 'Company: ';
  }

  return (
    <View style={styles.root}>
      {prefix ? <Text>{prefix}</Text> : undefined}
      <Text>{company.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
});

export default CompanyDisplay;

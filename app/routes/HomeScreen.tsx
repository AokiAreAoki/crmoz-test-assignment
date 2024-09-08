import React, {FC, useCallback} from 'react';
import {Button, StyleSheet} from 'react-native';
import Section from '../components/Section';
import {useNavigate} from 'react-router-native';

const HomeScreen: FC = () => {
  const navigate = useNavigate();
  const navToUsers = useCallback(() => navigate('./users'), [navigate]);

  return (
    <Section title="Pages:" style={styles.root}>
      <Button title="Users" onPress={navToUsers} />
    </Section>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 15,
  },
});

export default HomeScreen;

import React, {FC, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Section from '../components/Section';
import User from '../types/User';
import useAPI from '../hooks/useAPI';
import UserCard from '../components/UserCard';
import {Link} from 'react-router-native';

const UsersScreen: FC = () => {
  const api = useAPI();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetch() {
      const newUsers = await api.users.getAll();

      setUsers(newUsers);
      setLoading(false);
    }

    setLoading(true);
    fetch();
  }, [api]);

  if (loading) {
    return <Section title="Loading users...">Please wait</Section>;
  }

  return (
    <>
      <View style={styles.header}>
        <Text>Users:</Text>
      </View>

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.list}>
          {users.map(user => (
            <Link key={user.id} to={`/users/${user.id}`}>
              <UserCard user={user} />
            </Link>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexShrink: 0,
  },
  list: {
    flex: 1,
    rowGap: 5,
  },
});

export default UsersScreen;

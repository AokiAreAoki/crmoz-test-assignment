import React, {FC} from 'react';
import User from '../types/User';
import {Text} from 'react-native';
import Section from './Section';

interface Props {
  user: User;
}

const UserCard: FC<Props> = ({user}) => {
  return (
    <Section>
      <Text>Name: {user.name}</Text>
      <Text>E-mail: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
    </Section>
  );
};

export default UserCard;

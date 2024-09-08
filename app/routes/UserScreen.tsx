import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Section from '../components/Section';
import User from '../types/User';
import useAPI from '../hooks/useAPI';
import {useParams} from 'react-router-native';
import CompanyDisplay from '../components/CompanyDisplay';
import AddressDisplay from '../components/AddressDisplay';
import MapView from 'react-native-maps';
import LatLng from '../types/LatLng';
import {searchByAddress} from '../services/Geocoder';
import inlineAddress from '../utils/inlineAddress';

const DEFAULT_LATITUDE = 50;
const DEFAULT_LONGITUDE = 30;

const UserScreen: FC = () => {
  const params = useParams();
  const userId = params.id;

  const api = useAPI();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [coordinates, setCoordinates] = useState<LatLng | null>(null);

  useEffect(() => {
    async function fetch() {
      const newUser = await api.users.getOne(userId);

      setUser(newUser);
      setLoading(false);
    }

    setLoading(true);
    fetch();
  }, [userId, api.users]);

  useEffect(() => {
    if (!user?.address) {
      setCoordinates(null);
      return;
    }

    searchByAddress(inlineAddress(user.address)).then(coords => {
      setCoordinates(coords);
    });
  }, [user]);

  if (loading) {
    return <Section title="Loading user information...">Please wait</Section>;
  }

  if (!user) {
    return <Text>ERROR: Could not load user information</Text>;
  }

  return (
    <Section title={user.name} style={styles.section}>
      <View style={styles.root}>
        <View>
          <Text>Username: {user.username}</Text>
          <Text>E-mail: {user.email}</Text>
          <Text>Phone: {user.phone}</Text>
          <Text>Website: {user.website}</Text>

          <CompanyDisplay prefix company={user.company} />
          <AddressDisplay prefix address={user.address} />
        </View>

        <View style={styles.mapWrapper}>
          {coordinates ? (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: coordinates.lat || DEFAULT_LATITUDE,
                longitude: coordinates.lng || DEFAULT_LONGITUDE,
                latitudeDelta: 2,
                longitudeDelta: 2,
              }}
            />
          ) : (
            <Text>Loading map...</Text>
          )}
        </View>
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
  root: {
    flex: 1,
    gap: 15,
  },
  mapWrapper: {
    flex: 1,
    width: '100%',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default UserScreen;

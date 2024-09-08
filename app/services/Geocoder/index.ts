// import Config from '';
import Geocoder from 'react-native-geocoding';
import {GOOGLE_API_KEY} from '@env';

Geocoder.init(GOOGLE_API_KEY);

export async function searchByAddress(address: string) {
  return Geocoder.from(address)
    .then(json => json.results[0].geometry.location)
    .catch(error => {
      console.warn(error);
      return null;
    });
}

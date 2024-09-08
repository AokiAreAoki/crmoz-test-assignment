import LatLng from './LatLng';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: LatLng;
}

export default Address;

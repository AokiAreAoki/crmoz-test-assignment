import Address from '../types/Address';

export default function inlineAddress(address: Address) {
  return `${address.zipcode}, ${address.city}, ${address.street}, ${address.suite}`;
}

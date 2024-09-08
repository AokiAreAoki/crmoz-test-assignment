import axios from 'axios';
import User from '../../types/User';

export default class Users {
  private static EndPoints = {
    getAll: () => 'https://jsonplaceholder.typicode.com/users',
    getOne: (id: string | number) =>
      `https://jsonplaceholder.typicode.com/users/${id}`,
  };

  private static deserializationUser(data: any): User {
    return {
      id: Number(data.id),
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      website: data.website,

      address: data.address && {
        street: data.address.street,
        suite: data.address.suite,
        city: data.address.city,
        zipcode: data.address.zipcode,

        geo: {
          lat: Number(data.address.geo.lat),
          lng: Number(data.address.geo.lng),
        },
      },

      company: data.company && {
        name: data.company.name,
        catchPhrase: data.company.catchPhrase,
        bs: data.company.bs,
      },
    };
  }

  constructor() {}

  async getAll(): Promise<User[]> {
    return axios
      .get(Users.EndPoints.getAll())
      .then(response => {
        return (response.data as any[]).map(Users.deserializationUser);
      })
      .catch(error => {
        console.error(error);
        return [];
      });
  }

  async getOne(userId: string | number): Promise<User | null> {
    return axios
      .get(Users.EndPoints.getOne(userId))
      .then(response => {
        return Users.deserializationUser(response.data);
      })
      .catch(error => {
        console.error(error);
        return null;
      });
  }
}

import { faker } from '@faker-js/faker';

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.dateRegistered = new Date();
    this.profilePicture = 'https://source.unsplash.com/random/500x500';
  }
}

function createRandomUser() {
  const username = faker.internet.userName();
  const email = faker.internet.email();
  return new User(username, email);
}

export { User, createRandomUser };
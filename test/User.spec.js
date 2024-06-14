import { expect as _expect } from 'chai';
const expect = _expect;
import { faker } from '@faker-js/faker';
import { User, createRandomUser} from '../src/models/User.js';

describe('User', function() {
    it('should create a new user with given username and email', function() {
      const username = faker.internet.userName();
      const email = faker.internet.email();
      const user = new User(username, email);
  
      expect(user.username).to.equal(username);
      expect(user.email).to.equal(email);
      expect(user.profilePicture).to.equal('https://source.unsplash.com/random/500x500');
    });
  });
  
  describe('createRandomUser', function() {
    it('should create a new user with random username and email', function() {
      const user = createRandomUser();
  
      expect(user.username).to.be.a('string');
      expect(user.email).to.be.a('string');
      expect(user.profilePicture).to.equal('https://source.unsplash.com/random/500x500');
    });
  });
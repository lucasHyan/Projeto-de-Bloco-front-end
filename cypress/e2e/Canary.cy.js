import { describe, it } from 'mocha';
import cy from 'cypress';

describe('Banner Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should render the title', () => {
    cy.get('h1').contains('Fórum-2000');
  });

});
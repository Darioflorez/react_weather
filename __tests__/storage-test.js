
jest.autoMockOff();

import { getFavorites } from '../js/storage';

describe('sum', () => {
  pit('gets all saved favorites', () => {
    return getFavorites()
      .then( (data) => {
        console.log(data) 
      });
  });
});

jest.autoMockOff();

import { fetchWeather } from '../js/fetchData';

describe('sum', () => {
  pit('gets all saved favorites', () => {
    return fetchWeather('Stockholm')
      .then( (data) => {
        expect(data[0].name).toEqual('Stockholm')
        expect(data[0].country).toEqual('SE')
        expect(data[0].longitude).toBeCloseTo(18,0)
        expect(data[0].latitude).toBeCloseTo(59,0) 
      });
  });
});
import {fetchParse} from './api';


describe('FetchParse', () => {
  it('should call fetch with expected params', () => {
    window.fetch = jest.fn().mockImplimentation(() =>
      Promise.resolve({
       
        json: () =>
          Promise.resolve({
            houses: []
           
          })
      })
    );
    const mockURL = 'http://happy.com';
    fetchParse(mockURL);
    expect(window.fetch).toHaveBeenCalledWith(mockURL);
  });

  it('should', () => {
  
  });
});

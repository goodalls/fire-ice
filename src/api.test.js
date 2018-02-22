import { fetchParse } from './api';

describe('FetchParse', () => {
  it('should call fetch with expected params', () => {
    window.fetch = jest.fn().mockImplementation(() =>
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

  it('should return error if not resolved', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      error: 'bummer',
      status: 500
    }));

    const mockURL = 'http://happy.com';
    fetchParse(mockURL);
    expect(Error).toEqual('bummer');
  });
});

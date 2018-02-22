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

  it('should return object', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            houses: []
          })
      })
    );
    const expected = { houses: []};
    const mockURL = 'http://happy.com';
    expect(fetchParse(mockURL)).resolves.toEqual(expected);
  });

  it('should return error if not resolved', async() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        error: 'bummer',
        status: 500
      })
    }));

    const mockURL = 'http://happy.com';
    const wrapper = await fetchParse(mockURL);
    expect(wrapper.error).toEqual('bummer');
  });
});

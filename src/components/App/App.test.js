import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import * as api from '../../api';
import { ok } from 'assert';

describe('APP', () => {
//network request failed....

  // it('should match the snapshot', () => {
  //   const wrapper = shallow(
  //     <App houses={[]} populate={jest.fn()} fake={jest.fn()} fakeAction={jest.fn()} />
  //   );
  //   expect(wrapper).toMatchSnapshot();
  // });
  describe('RequestData', () => {
    // window.fetch = jest.fn().mockImplementation(() =>
    //   Promise.resolve({
    //     result: ok,
    //     json: () =>
    //       Promise.resolve({
    //         houses: [],
    //         result: ok
    //       })
    //   })
    // );

    // it('should call api helper function with expected params', async() => {
    //   const wrapper = shallow(<App houses={[]} populate={jest.fn()} />);
    //   const mockURL = 'jeff.is.cool.com'
    //   api.fetchParse = jest.fn(mockURL);
    //   await wrapper.instance().requestData();
    //   wrapper.update()
    //   expect(api.fetchParse).toHaveBeenCalled();
    //   // With(
    //   //   'http://localhost:3001/api/v1/houses'
    //   // );
    // });
  });
  describe('housesRenderCheck', () => {
    it('should', () => {});
  });

  describe('MSTP and MDTP', () => {
    it('should map fake to props', () => {
      const mockState = {
        fake: ['fake'],
        houses: ['houses']
      };
      const mapped = mapStateToProps(mockState);
      expect(mapped.fake).toEqual(['fake']);
    });
    it('should map houses to props', () => {
      const mockState = {
        fake: ['fake'],
        houses: ['houses']
      };
      const mapped = mapStateToProps(mockState);
      expect(mapped.houses).toEqual(['houses']);
    });

    it('should call fakeaction dispatch function when using MDTP', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.fakeAction();
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call populate dispatch function when using MDTP', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.populate();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});

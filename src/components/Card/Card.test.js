import Card from './Card';
import {shallow} from 'enzyme';
import React from 'react';


describe('CARD', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Card/>);
    expect(wrapper).toMatchSnapshot();
  });
});

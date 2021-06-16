import React from 'react';
import {shallow} from 'enzyme';
import Header from '../layout/Header';

describe('Header Component', () => {
  it('should render without errors', () => {
    const component = shallow(<Header />);
    console.log(component.debug());
  });
});

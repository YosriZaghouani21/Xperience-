import React from 'react';
import {shallow} from 'enzyme';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

describe('Header Component', () => {
  it('should render without a header errors', () => {
    const component = shallow(<Header />);
    console.log(component.debug());
  });

  it('should render a footer without errors', () => {
    const component = shallow(<Footer />);
    console.log(component.debug());
  });
});

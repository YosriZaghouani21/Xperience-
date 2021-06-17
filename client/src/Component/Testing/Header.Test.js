import React from 'react';
import {shallow} from 'enzyme';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import PublicationDetails from '../publishedExperience/PublicationDetails';

describe('Header Component', () => {
  it('should render a publication details without errors', () => {
    const component = shallow(<PublicationDetails />);
    console.log(component.debug());
  });
});

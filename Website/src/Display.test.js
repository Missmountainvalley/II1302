import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {shallow,  configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import modelInstance from './data/Displaymodel';

describe('Display renders', () => {
  it('Render display', () => {
    const wrapper = shallow(<modelInstance />)
    expect(wrapper.exists()).toBe(true);
  });
});

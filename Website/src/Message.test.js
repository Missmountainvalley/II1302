import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {shallow,  configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
configure({adapter: new Adapter()});

import Message from './Message/Message';

const wrapper = shallow(<Message />);

describe('<Message />', () => {
  it('Render Message', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Find link', () => {
    expect(wrapper.find("Link").props("to").to).toBe('/confirm');
  });
});

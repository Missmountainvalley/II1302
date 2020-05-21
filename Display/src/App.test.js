import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {shallow,  configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
configure({adapter: new Adapter()});

import App from './App';

const wrapper = shallow (<App/>);

describe("<App />", () => {
  it('Render App', () => {
    expect(wrapper.exists()).toBe(true);
  });
});


import React from 'react';
import {shallow,  configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import Home from './Home/home';
import {newPage} from './Home/home';


describe('Test button in Home', () => {
    it("Expects to find button HTML element in the DOM", () => {
        const wrapper = shallow(<Home />)
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it("Expects to find button HTML element with className newPage in the DOM", () => {
        const wrapper = shallow(<Home className="newPage" />)
        expect(wrapper.find('button.newPage')).toHaveLength(1);
    });

    it('calls newPage when button is clicked', () => {
  	   Home.prototype.newPage = jest.fn();
	     let wrapper = shallow(<Home />);
	     let { newPage } = wrapper.instance();
	     expect(newPage).toHaveBeenCalledTimes(0);
	     wrapper.find('#newPageBtn').prop('onClick')();
	     expect(newPage).toHaveBeenCalledTimes(1);
    });
});

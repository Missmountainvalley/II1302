import React from 'react';
import ReactDOM, { render } from 'react-dom';
import modelInstance from "./data/DisplayModel";


it('renders without crashing', () => {
const div = document.createElement('div');
      ReactDOM.render(<modelInstance />, div);
      ReactDOM.unmountComponentAtNode(div); 
});

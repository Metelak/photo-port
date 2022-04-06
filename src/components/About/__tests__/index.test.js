import React from 'react';
//retrieve some functions from the React Testing Library
import { render, cleanup } from '@testing-library/react';
//import from jest-dom package
import '@testing-library/jest-dom/extend-expect';
//import the component we are testing
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // First Test to verify that the component is rendering
    it('renders', () => {
      render(<About />);
    });
  
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
      });
  })
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/nav';

describe('Testing the display of Navbar', () => {
  it('Navbar shows', () => {
    const navShows = render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(navShows).toMatchSnapshot();
  });
});

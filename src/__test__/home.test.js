import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/home';

describe('Testing home page', () => {
  it('Home page shows', () => {
    const homeShows = render(<BrowserRouter><Home /></BrowserRouter>);
    expect(homeShows).toMatchSnapshot();
  });
});

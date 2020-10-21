import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter} from "react-router-dom";
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<MemoryRouter initialEntries={['/']} initialIndex={0} ><App/></MemoryRouter>);
  const linkElement = getByText(/Goal/i);
  expect(linkElement).toBeInTheDocument();
});

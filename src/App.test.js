// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenCipher title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenCipher/i);
    expect(titleElement).toBeInTheDocument();
});

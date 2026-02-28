// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ToolNova title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ToolNova/i);
    expect(titleElement).toBeInTheDocument();
});

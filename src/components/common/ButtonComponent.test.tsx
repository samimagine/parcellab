import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './ButtonComponent';

test('renders Button with the correct text', () => {
    render(<Button text="Click Me" onClick={() => {}} />);

    expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('calls the onClick handler when button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" onClick={handleClick} />);

    const button = screen.getByText('Click Me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
});

test('applies fullWidth class when fullWidth is true', () => {
    render(<Button text="Full Width" onClick={() => {}} fullWidth={true} />);

    const button = screen.getByText('Full Width');
    expect(button).toHaveClass('w-full rounded-none');
});

test('applies default class when fullWidth is false', () => {
    render(<Button text="Default Width" onClick={() => {}} fullWidth={false} />);

    const button = screen.getByText('Default Width');
    expect(button).toHaveClass('rounded-lg');
});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './InputComponent';

describe('Input Component', () => {

    test('renders input with correct label and value', () => {
        const mockOnChange = jest.fn();
        render(
            <Input
                label="Username"
                value="JohnDoe"
                onChange={mockOnChange}
            />
        );

        const label = screen.getByLabelText('Username');
        expect(label).toBeInTheDocument();

        const input = screen.getByDisplayValue('JohnDoe');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
    });

    test('calls onChange handler when input value changes', () => {
        const mockOnChange = jest.fn();
        render(
            <Input
                label="Username"
                value=""
                onChange={mockOnChange}
            />
        );

        const input = screen.getByLabelText('Username');

        fireEvent.change(input, { target: { value: 'JaneDoe' } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
    });

    test('renders input with correct type', () => {
        const mockOnChange = jest.fn();
        render(
            <Input
                label="Password"
                value=""
                onChange={mockOnChange}
                type="password"
            />
        );

        const input = screen.getByLabelText('Password');
        expect(input).toHaveAttribute('type', 'password');
    });
});
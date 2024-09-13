import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LogOutButton from './LogOutButtonComponent';

describe('LogOutButton Component', () => {

    test('renders with initial lock icon and "Sign out" text', () => {
        const mockOnLogOut = jest.fn();
        render(<LogOutButton onLogOut={mockOnLogOut} />);

        expect(screen.getByText('Sign out')).toBeInTheDocument();

        const lockIcon = screen.getByTestId('lock-icon');
        expect(lockIcon).toBeInTheDocument();
    });

    test('changes to unlock icon on hover', () => {
        const mockOnLogOut = jest.fn();
        render(<LogOutButton onLogOut={mockOnLogOut} />);

        const button = screen.getByText('Sign out');

        expect(screen.getByTestId('lock-icon')).toBeInTheDocument();

        fireEvent.mouseEnter(button);

        expect(screen.getByTestId('unlock-icon')).toBeInTheDocument();

        fireEvent.mouseLeave(button);

        expect(screen.getByTestId('lock-icon')).toBeInTheDocument();
    });

    test('calls onLogOut when clicked', () => {
        const mockOnLogOut = jest.fn();
        render(<LogOutButton onLogOut={mockOnLogOut} />);

        const button = screen.getByText('Sign out');
        fireEvent.click(button);

        expect(mockOnLogOut).toHaveBeenCalledTimes(1);
    });
});
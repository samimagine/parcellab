import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './ErrorPage';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Error Page', () => {
    test('renders correctly', () => {
        (useNavigate as jest.Mock).mockReturnValue(jest.fn());

        render(<Error />);

        expect(screen.getByText('Oops! We couldn’t find that order.')).toBeInTheDocument();
        expect(screen.getByText('It looks like the order number or zip code doesn’t match. Double-check your details and try again! 😊')).toBeInTheDocument();
        expect(screen.getByText('Go Back')).toBeInTheDocument();
    });

    test('navigates to the home page when the "Go Back" button is clicked', () => {
        const navigate = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(navigate);

        render(<Error />);

        const button = screen.getByText('Go Back');
        button.click();

        expect(navigate).toHaveBeenCalledWith('/');
    });
});

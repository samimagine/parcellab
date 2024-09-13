import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import Header from './HeaderComponent';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('Header Component', () => {
    const mockNavigate = jest.fn();

    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders logo with correct src and alt attributes', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const logo = screen.getByAltText('Track Order parcelLab logo');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', '/assets/images/logo.png');
    });

    test('navigates to the root path when LogOutButton is clicked', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const logOutButton = screen.getByText('Sign out');
        fireEvent.click(logOutButton);

        expect(mockNavigate).toHaveBeenCalledWith('/');
    });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './LogoComponent';

describe('Logo Component', () => {
    test('renders the logo with default medium size', () => {
        render(<Logo />);

        const logo = screen.getByAltText('Track Order parcelLab logo');

        expect(logo).toBeInTheDocument();

        expect(logo).toHaveClass('w-16 h-16 md:w-24 md:h-24');
    });

    test('renders the logo with small size', () => {
        render(<Logo size="small" />);

        const logo = screen.getByAltText('Track Order parcelLab logo');

        expect(logo).toHaveClass('w-12 h-12');
    });

    test('renders the logo with large size', () => {
        render(<Logo size="large" />);

        const logo = screen.getByAltText('Track Order parcelLab logo');

        expect(logo).toHaveClass('w-32 h-32');
    });
});
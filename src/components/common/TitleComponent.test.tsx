import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './TitleComponent';

describe('Title Component', () => {
    test('renders title with correct text', () => {
        render(<Title text="Test Title" />);

        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    test('applies the correct class for small size', () => {
        render(<Title text="Small Title" size="small" />);

        const titleElement = screen.getByText('Small Title');

        expect(titleElement).toHaveClass('text-2xl mt-2 mb-4');
    });

    test('applies the correct class for medium size (default)', () => {
        render(<Title text="Medium Title" />);

        const titleElement = screen.getByText('Medium Title');

        expect(titleElement).toHaveClass('text-2xl font-bold');
    });

    test('applies the correct class for large size', () => {
        render(<Title text="Large Title" size="large" />);

        const titleElement = screen.getByText('Large Title');

        expect(titleElement).toHaveClass('text-4xl font-bold mb-2');
    });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderStatusNote from './OrderStatusNoteComponent';

describe('OrderStatusNote Component', () => {
    const mockProps = {
        title: 'Delivered',
        message: 'Your package has been delivered.',
        date: '2023-01-01T12:00:00Z',
        location: 'Berlin, DEU',
    };

    test('renders correctly with the provided title, message, location, and formatted date', () => {
        render(<OrderStatusNote {...mockProps} />);

        expect(screen.getByText(mockProps.title)).toBeInTheDocument();

        expect(screen.getByText(mockProps.message)).toBeInTheDocument();

        expect(screen.getByText(mockProps.location)).toBeInTheDocument();

        expect(screen.getByText('01.01.2023, 13:00')).toBeInTheDocument();
    });

    test('formats the date correctly', () => {
        render(<OrderStatusNote {...mockProps} />);

        const formattedDate = screen.getByText('01.01.2023, 13:00');
        expect(formattedDate).toBeInTheDocument();
    });
});
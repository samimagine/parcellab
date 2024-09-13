import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MapButton from './MapButtonComponent';

global.open = jest.fn();

describe('MapButton Component', () => {
    const city = 'Munich';
    const country = 'Germany';

    test('renders button with correct text', () => {
        render(<MapButton city={city} country={country} />);

        expect(screen.getByText('Get directions')).toBeInTheDocument();
    });

    test('opens correct Google Maps URL on click', () => {
        render(<MapButton city={city} country={country} />);

        const button = screen.getByText('Get directions');

        fireEvent.click(button);

        expect(global.open).toHaveBeenCalledWith(
            'https://www.google.com/maps?q=Munich,Germany',
            '_blank'
        );
    });
});
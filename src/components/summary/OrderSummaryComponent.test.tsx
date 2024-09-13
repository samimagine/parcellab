import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderSummary from './OrderSummaryComponent';

jest.mock('../common/TitleComponent', () => ({ text, size }: { text: string, size: string }) => (
    <div data-testid="title">{`${size}: ${text}`}</div>
));

jest.mock('../map/MapComponent', () => ({ imagePath, latestCheckpoint }: { imagePath: string, latestCheckpoint: { city: string, country_iso3: string } }) => (
    <div data-testid="map">{`Map for ${latestCheckpoint.city}, ${latestCheckpoint.country_iso3}`}</div>
));

describe('OrderSummary Component', () => {
    const mockProps = {
        status: 'Delivered',
        statusDetails: 'Your package has been delivered successfully.',
        latestCheckpoint: {
            city: 'Berlin',
            country_iso3: 'DEU',
        },
    };

    test('renders the correct status, statusDetails, and map', () => {
        render(<OrderSummary {...mockProps} />);

        expect(screen.getByText('large: Delivered')).toBeInTheDocument();
        expect(screen.getByText('medium: Your package has been delivered successfully.')).toBeInTheDocument();

        expect(screen.getByTestId('map')).toHaveTextContent('Map for Berlin, DEU');
    });

    test('passes the correct props to the Map component', () => {
        render(<OrderSummary {...mockProps} />);

        const map = screen.getByTestId('map');
        expect(map).toHaveTextContent('Map for Berlin, DEU');
    });
});
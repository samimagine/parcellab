import React from 'react';
import { render, screen } from '@testing-library/react';
import Map from './MapComponent';

jest.mock('./MapButtonComponent', () => ({ city, country }: { city: string, country: string }) => (
    <div data-testid="map-button">{`Map Button for ${city}, ${country}`}</div>
));

describe('MapComponent', () => {
    const mockImagePath = 'https://example.com/map.jpg';
    const mockCheckpoint = {
        city: 'Berlin',
        country_iso3: 'DEU',
    };

    test('renders the image and MapButton with correct city and country', () => {
        render(<Map imagePath={mockImagePath} latestCheckpoint={mockCheckpoint} />);

        const image = screen.getByAltText('parcelLab map');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', mockImagePath);

        expect(screen.getByTestId('map-button')).toHaveTextContent('Map Button for Berlin, DEU');
    });
});
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import OrderStatusList from './OrderStatusListComponent';

jest.mock('./OrderStatusNoteComponent', () => ({ title, message, date, location }: { title: string, message: string, date: string, location: string }) => (
    <div data-testid="order-status-note">
        <div>{title}</div>
        <div>{message}</div>
        <div>{date}</div>
        <div>{location}</div>
    </div>
));

describe('OrderStatusList Component', () => {
    const mockCheckpoints = [
        {
            status: 'In Transit',
            status_details: 'Your package is in transit.',
            event_timestamp: '2023-01-01T12:00:00Z',
            country_iso3: 'USA',
            city: 'New York',
        },
        {
            status: 'Delivered',
            status_details: 'Your package has been delivered.',
            event_timestamp: '2023-01-02T15:00:00Z',
            country_iso3: 'USA',
            city: 'Los Angeles',
        },
        {
            status: 'Out for Delivery',
            status_details: 'Your package is out for delivery.',
            event_timestamp: '2023-01-02T08:00:00Z',
            country_iso3: 'USA',
            city: 'Chicago',
        },
        {
            status: 'Registered',
            status_details: 'Your package has been registered.',
            event_timestamp: '2023-01-03T10:00:00Z',
            country_iso3: 'USA',
            city: 'Houston',
        }
    ];

    afterEach(() => {
        cleanup();
    });

    test('renders the correct number of OrderStatusNote components based on the limit', () => {
        render(<OrderStatusList checkpoints={mockCheckpoints} limit={2} />);

        expect(screen.getAllByTestId('order-status-note')).toHaveLength(2);
    });

    test('toggles between showing more and fewer checkpoints', () => {
        render(<OrderStatusList checkpoints={mockCheckpoints} limit={2} />);

        expect(screen.getAllByTestId('order-status-note')).toHaveLength(2);

        fireEvent.click(screen.getByText('more'));
        expect(screen.getAllByTestId('order-status-note')).toHaveLength(4);

        fireEvent.click(screen.getByText('less'));
        expect(screen.getAllByTestId('order-status-note')).toHaveLength(2);
    });

    test('renders "more" button only when checkpoints length exceeds the limit', () => {
        render(<OrderStatusList checkpoints={mockCheckpoints} limit={2} />);
        expect(screen.getByText('more')).toBeInTheDocument();

        cleanup();
        render(<OrderStatusList checkpoints={mockCheckpoints.slice(0, 1)} limit={2} />);
        expect(screen.queryByText('more')).not.toBeInTheDocument();
    });
});
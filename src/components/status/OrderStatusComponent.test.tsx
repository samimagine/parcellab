import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderStatus from './OrderStatusComponent';
import { Checkpoint } from './OrderStatusComponent';

jest.mock('./StatusProgressComponent', () => ({ status }: { status: string }) => (
    <div data-testid="status-progress">{`Status Progress: ${status}`}</div>
));
jest.mock('./OrderStatusListComponent', () => ({ checkpoints }: { checkpoints: Checkpoint[] }) => (
    <div data-testid="order-status-list">
        {checkpoints.map((checkpoint, index) => (
            <div key={index}>{checkpoint.status_details}</div>
        ))}
    </div>
));
jest.mock('../common/ShareLinkButtonComponent', () => ({ url }: { url: string }) => (
    <div data-testid="share-link-button">{`Share this link: ${url}`}</div>
));

describe('OrderStatus Component', () => {
    const mockStatus = 'In Transit';
    const mockCheckpoints: Checkpoint[] = [
        {
            status_details: 'Your package is in transit.',
            event_timestamp: '2023-01-01T12:00:00Z',
            status: 'in_transit',
            country_iso3: 'USA',
            city: 'New York',
        },
        {
            status_details: 'Your package has arrived at the destination.',
            event_timestamp: '2023-01-02T15:00:00Z',
            status: 'delivered',
            country_iso3: 'USA',
            city: 'Los Angeles',
        },
    ];

    const mockUrl = 'http://localhost/order-info?order=123&zip=456';

    test('renders Title with correct text', () => {
        render(<OrderStatus status={mockStatus} checkpoints={mockCheckpoints} url={mockUrl} />);

        expect(screen.getByText('Shipping updates')).toBeInTheDocument();
    });

    test('renders StatusProgress with correct status', () => {
        render(<OrderStatus status={mockStatus} checkpoints={mockCheckpoints} url={mockUrl} />);

        expect(screen.getByTestId('status-progress')).toHaveTextContent('Status Progress: In Transit');
    });

    test('renders OrderStatusListComponent with correct checkpoints', () => {
        render(<OrderStatus status={mockStatus} checkpoints={mockCheckpoints} url={mockUrl} />);

        expect(screen.getByTestId('order-status-list')).toBeInTheDocument();
        expect(screen.getByText('Your package is in transit.')).toBeInTheDocument();
        expect(screen.getByText('Your package has arrived at the destination.')).toBeInTheDocument();
    });

    test('renders ShareLinkButtonComponent with correct URL', () => {
        render(<OrderStatus status={mockStatus} checkpoints={mockCheckpoints} url={mockUrl} />);

        expect(screen.getByTestId('share-link-button')).toHaveTextContent(`Share this link: ${mockUrl}`);
    });
});
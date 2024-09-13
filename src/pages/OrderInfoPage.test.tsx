import React from 'react';
import { render, screen } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import OrderInfoPage from './OrderInfoPage';
import {Checkpoint} from "../components/status/OrderStatusComponent";

jest.mock('../components/common/HeaderComponent', () => () => <div data-testid="header">Header</div>);
jest.mock('../components/summary/OrderSummaryComponent', () => ({ status, statusDetails, latestCheckpoint }: { status: string; statusDetails: string; latestCheckpoint: Checkpoint }) => {
    return (
        <div
            data-testid="order-summary">{`Status: ${status}, Details: ${statusDetails}, Location: ${latestCheckpoint.city}`}</div>
    );
});
jest.mock('../components/status/OrderStatusComponent', () => ({ status, checkpoints }: { status: string; checkpoints: Checkpoint[] }) => (    <div data-testid="order-status">{`Status: ${status}, Checkpoints: ${checkpoints.length}`}</div>
));
jest.mock('../components/articles/OrderArticlesComponent', () => ({ articles }: { articles: { articleNo: string; articleName: string; articleImageUrl: string; price: number; }[] }) => (    <div data-testid="order-articles">{`Articles: ${articles.length}`}</div>
));

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
}));

describe('OrderInfoPage Component', () => {
    const mockCheckpoints = [
        {
            status_details: 'Your package was registered in our system by the sender.',
            event_timestamp: '2023-01-05T14:13:30Z',
            status: 'Registered',
            country_iso3: 'USA',
            city: 'Knoxville',
        },
        {
            status_details: 'Your package is loaded and in transit to your area.',
            event_timestamp: '2023-01-06T11:16:30Z',
            status: 'In transit',
            country_iso3: 'USA',
            city: 'Knoxville',
        },
    ];

    const mockOrderDetails = {
        delivery_info: {
            articles: [
                {
                    articleNo: 'AB20224',
                    articleName: 'iPhone Pro 128GB',
                    articleImageUrl: 'https://images.unsplash.com/photo-1603625953304-97b6e41336b5',
                    price: 1299.00,
                },
            ],
        },
    };

    beforeEach(() => {
        (useLocation as jest.Mock).mockReturnValue({
            state: {
                orderDetails: mockOrderDetails,
                checkpoints: mockCheckpoints,
            },
        });
    });

    test('renders order details and components correctly', () => {
        render(<OrderInfoPage />);

        expect(screen.getByTestId('header')).toBeInTheDocument();

        expect(screen.getByTestId('order-summary')).toHaveTextContent('Status: In transit');
        expect(screen.getByTestId('order-summary')).toHaveTextContent('Details: Your package is loaded and in transit to your area');
        expect(screen.getByTestId('order-summary')).toHaveTextContent('Location: Knoxville');

        expect(screen.getByTestId('order-status')).toHaveTextContent('Status: In transit');
        expect(screen.getByTestId('order-status')).toHaveTextContent('Checkpoints: 2');

        expect(screen.getByTestId('order-articles')).toHaveTextContent('Articles: 1');
    });

    test('renders fallback message when no order details are available', () => {
        (useLocation as jest.Mock).mockReturnValue({
            state: {},
        });

        render(<OrderInfoPage />);

        expect(screen.getByText('No order details available')).toBeInTheDocument();
    });
});
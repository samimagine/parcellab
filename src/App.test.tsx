import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import App from './App';

describe('App Routing', () => {
    test('renders TrackingFormPage by default route /', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App/>
            </MemoryRouter>
        );
        expect(screen.getByText(/Track your order/i)).toBeInTheDocument();
    });

    test('renders ErrorPage for /error route', () => {
        render(
            <MemoryRouter initialEntries={['/error']}>
                <App/>
            </MemoryRouter>
        );
        expect(screen.getByText(/Oops! We couldn’t find that order/i)).toBeInTheDocument();
    });

    test('renders OrderInfoPage for /order-info route', () => {
        render(
            <MemoryRouter initialEntries={['/order-info']}>
                <App/>
            </MemoryRouter>
        );
        expect(screen.getByText(/Order Details/i)).toBeInTheDocument();
    });
});
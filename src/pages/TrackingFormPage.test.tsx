import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import TrackingFormPage from './TrackingFormPage';

describe('TrackingFormPage', () => {
    test('renders the inputs and button', () => {
        render(
            <MemoryRouter>
                <TrackingFormPage/>
            </MemoryRouter>
        );

        expect(screen.getByLabelText(/Order Number/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
        expect(screen.getByText(/Track your order/i)).toBeInTheDocument();
    });

    test('allows the user to type in the inputs', () => {
        render(
            <MemoryRouter>
                <TrackingFormPage/>
            </MemoryRouter>
        );

        const orderNumberInput = screen.getByLabelText(/Order Number/i);
        const zipCodeInput = screen.getByLabelText(/Zip Code/i);

        fireEvent.change(orderNumberInput, {target: {value: '12345'}});
        expect(orderNumberInput).toHaveValue('12345');

        fireEvent.change(zipCodeInput, {target: {value: '54321'}});
        expect(zipCodeInput).toHaveValue('54321');
    });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import StatusProgress from './StatusProgressComponent';

describe('StatusProgress Component', () => {
    const getProgressBar = () => screen.getByRole('progressbar');

    test('renders progress bar with 25% width for "registered" status', () => {
        render(<StatusProgress status="registered" />);

        const progressBar = getProgressBar();
        expect(progressBar).toHaveStyle('width: 25%');
    });

    test('renders progress bar with 50% width for "in transit" status', () => {
        render(<StatusProgress status="in transit" />);

        const progressBar = getProgressBar();
        expect(progressBar).toHaveStyle('width: 50%');
    });

    test('renders progress bar with 75% width for "out for delivery" status', () => {
        render(<StatusProgress status="out for delivery" />);

        const progressBar = getProgressBar();
        expect(progressBar).toHaveStyle('width: 75%');
    });

    test('renders progress bar with 75% width for "failed delivery attempt" status', () => {
        render(<StatusProgress status="failed delivery attempt" />);

        const progressBar = getProgressBar();
        expect(progressBar).toHaveStyle('width: 75%');
    });

    test('renders progress bar with 75% width for "ready for collection" status', () => {
        render(<StatusProgress status="ready for collection" />);

        const progressBar = getProgressBar();
        expect(progressBar).toHaveStyle('width: 75%');
    });

    test('renders progress bar with 100% width for "delivered" status', () => {
        render(<StatusProgress status="delivered" />);

        const progressBar = getProgressBar();
        expect(progressBar).toHaveStyle('width: 100%');
    });

    test('renders progress bar with 0% width for unknown status', () => {
        render(<StatusProgress status="unknown" />);

        const progressBar = getProgressBar();
        expect(progressBar).toHaveStyle('width: 0%');
    });
});
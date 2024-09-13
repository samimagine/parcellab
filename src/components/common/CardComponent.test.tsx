import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './CardComponent';

test('renders children inside the Card', () => {
    render(
        <Card>
            <p>Test content</p>
        </Card>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
});

test('applies padding when noPadding is false', () => {
    render(
        <Card noPadding={false}>
            <p>Test content</p>
        </Card>
    );

    const cardElement = screen.getByText('Test content').parentElement;
    expect(cardElement).toHaveClass('p-6');
});

test('does not apply padding when noPadding is true', () => {
    render(
        <Card noPadding={true}>
            <p>Test content</p>
        </Card>
    );

    const cardElement = screen.getByText('Test content').parentElement;
    expect(cardElement).not.toHaveClass('p-6');
});

test('applies overflow-hidden when overflowHidden is true', () => {
    render(
        <Card overflowHidden={true}>
            <p>Test content</p>
        </Card>
    );

    const cardElement = screen.getByText('Test content').parentElement;
    expect(cardElement).toHaveClass('overflow-hidden');
});

test('applies overflow-y-scroll when overflowScroll is true', () => {
    render(
        <Card overflowScroll={true}>
            <p>Test content</p>
        </Card>
    );

    const cardElement = screen.getByText('Test content').parentElement;
    expect(cardElement).toHaveClass('overflow-y-scroll');
});
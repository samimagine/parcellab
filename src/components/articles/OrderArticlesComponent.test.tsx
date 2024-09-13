import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderArticles from './OrderArticlesComponent';

describe('OrderArticlesComponent', () => {
    const mockArticles = [
        {
            articleNo: 'AB123456',
            articleName: 'Sample Article 1',
            articleImageUrl: 'https://example.com/image1.jpg',
            price: 199.99,
        },
        {
            articleNo: 'AB123457',
            articleName: 'Sample Article 2',
            articleImageUrl: null,
            price: 99.99,
        },
    ];

    test('renders Title with correct text', () => {
        render(<OrderArticles articles={mockArticles} />);

        expect(screen.getByText('Articles')).toBeInTheDocument();
    });

    test('renders ArticleListComponent with correct articles', () => {
        render(<OrderArticles articles={mockArticles} />);

        expect(screen.getByText('Sample Article 1')).toBeInTheDocument();
        expect(screen.getByText('Sample Article 2')).toBeInTheDocument();
        expect(screen.getByText('199.99€')).toBeInTheDocument();
        expect(screen.getByText('99.99€')).toBeInTheDocument();
    });
});
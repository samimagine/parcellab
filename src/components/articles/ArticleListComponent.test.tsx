import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from './ArticleListComponent';

describe('ArticleListComponent', () => {
    const articles = [
        {
            articleNo: 'AB123456',
            articleImageUrl: 'https://example.com/image1.jpg',
            articleName: 'Sample Article 1',
            price: 199.99,
        },
        {
            articleNo: 'AB123457',
            articleImageUrl: null,
            articleName: 'Sample Article 2',
            price: 99.99,
        },
    ];

    test('renders the correct number of articles', () => {
        render(<ArticleList articles={articles} />);

        expect(screen.getAllByText(/Sample Article/).length).toBe(2);
    });

    test('renders placeholder image when articleImageUrl is null', () => {
        render(<ArticleList articles={articles} />);

        const secondArticleImage = screen.getByAltText('Sample Article 2');
        expect(secondArticleImage).toHaveAttribute(
            'src',
            `${process.env.PUBLIC_URL}/assets/images/placeholder.png`
        );
    });

    test('passes correct props to Article components', () => {
        render(<ArticleList articles={articles} />);

        expect(screen.getByText('Sample Article 1')).toBeInTheDocument();

        expect(screen.getByText('199.99€')).toBeInTheDocument();

        expect(screen.getByText('99.99€')).toBeInTheDocument();
    });
});
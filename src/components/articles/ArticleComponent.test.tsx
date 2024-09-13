import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './ArticleComponent';

describe('Article Component', () => {
    const articleProps = {
        imageUrl: 'https://example.com/image.jpg',
        imageAlt: 'Example Image',
        description: 'This is a sample article',
        articleNumber: 'AB123456',
        price: 299.99,
    };

    test('renders article with correct description, article number, and price', () => {
        render(<Article {...articleProps} />);

        expect(screen.getByText(articleProps.description)).toBeInTheDocument();

        expect(screen.getByText(`Article number: ${articleProps.articleNumber}`)).toBeInTheDocument();

        expect(screen.getByText('299.99€')).toBeInTheDocument();
    });

    test('renders image with correct src and alt attributes', () => {
        render(<Article {...articleProps} />);

        const image = screen.getByAltText(articleProps.imageAlt);

        expect(image).toHaveAttribute('src', articleProps.imageUrl);

        expect(image).toHaveAttribute('alt', articleProps.imageAlt);
    });

    test('formats the price to two decimal places', () => {
        const priceWithDecimals = 123.456;
        render(<Article {...articleProps} price={priceWithDecimals} />);

        expect(screen.getByText('123.46€')).toBeInTheDocument();
    });
});
import React from 'react';

interface ArticleProps {
    imageUrl: string;
    imageAlt: string;
    description: string;
    articleNumber: string;
    price: number;
}

const Article: React.FC<ArticleProps> = ({imageUrl, imageAlt, description, articleNumber, price}) => {
    return (
        <div
            className="flex flex-col md:flex-row items-center mb-2">
            <div className="w-full md:w-1/3">
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="object-cover w-full h-48 md:h-full rounded-xl"
                />
            </div>
            <div className="w-full md:w-2/3 p-6">
                <p className="text-gray-700 font-bold leading-tight">{description}</p>
                <p className="text-gray-500 text-base">Article number: {articleNumber}</p>
                <p className="text-gray-700 font-bold">{price.toFixed(2)}€</p>
            </div>
        </div>
    );
};

export default Article;
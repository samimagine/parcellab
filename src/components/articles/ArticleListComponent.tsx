import React from 'react';
import Article from './ArticleComponent';

interface ArticleData {
    articleNo: string;
    articleImageUrl: string | null;
    articleName: string;
    price: number;
}

interface ArticleListComponentProps {
    articles: ArticleData[];
}

const ArticleList: React.FC<ArticleListComponentProps> = ({articles}) => {
    return (
        <div>
            {articles.map((article) => (
                <Article
                    key={article.articleNo}
                    imageUrl={article.articleImageUrl || `${process.env.PUBLIC_URL}/assets/images/placeholder.png`}
                    imageAlt={article.articleName}
                    description={article.articleName}
                    articleNumber={article.articleNo}
                    price={article.price}
                />
            ))}
        </div>
    );
};

export default ArticleList;
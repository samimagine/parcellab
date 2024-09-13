import React from 'react';
import Title from '../common/TitleComponent';
import ArticleList from './ArticleListComponent';
import Card from '../common/CardComponent';

interface Article {
    articleNo: string;
    articleName: string;
    articleImageUrl: string | null;
    price: number;
}

interface ArticlesProps {
    articles: Article[];
}

const OrderArticles: React.FC<ArticlesProps> = ({articles}) => {
    return (
        <Card>
            <Title size="small" text="Articles"/>
            <ArticleList articles={articles}/>
        </Card>
    );
};

export default OrderArticles;
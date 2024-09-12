import React from 'react';
import Title from '../common/TitleComponent';
import ArticleListComponent from './ArticleListComponent';
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

const ArticlesComponent: React.FC<ArticlesProps> = ({articles}) => {
    return (
        <Card>
            <Title size="small" text="Articles"/>
            <ArticleListComponent articles={articles}/>
        </Card>
    );
};

export default ArticlesComponent;
import React from 'react';

interface TitleProps {
    text: string;
    size?: 'small' | 'medium' | 'large';
}

const Title: React.FC<TitleProps> = ({text, size = 'medium'}) => {
    let textSizeClass = '';

    switch (size) {
        case 'small':
            textSizeClass = 'text-2xl mt-2 mb-4';
            break;
        case 'large':
            textSizeClass = 'text-4xl font-bold mb-2';
            break;
        case 'medium':
        default:
            textSizeClass = 'text-2xl font-bold';
    }

    return (
        <h1 className={`${textSizeClass} text-gray-900`}>
            {text}
        </h1>
    );
};

export default Title;
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    noPadding?: boolean;
    overflowHidden?: boolean;
    overflowScroll?: boolean;
    height?: number;
}

const Card: React.FC<CardProps> = ({
                                       children,
                                       noPadding = false,
                                       overflowHidden = false,
                                       overflowScroll = false,
                                       height = 600,
                                   }) => {
    return (
        <div
            className={`w-full sm:min-w-[24rem] sm:max-w-sm lg:min-w-0 mx-auto bg-white shadow-lg rounded-xl relative 
            ${!noPadding && 'p-6'} 
            ${overflowHidden && 'overflow-hidden'} 
            ${overflowScroll && 'overflow-y-scroll'}
            `}
            style={{height: `${height}px`}}
        >
            {children}
        </div>
    );
};

export default Card;
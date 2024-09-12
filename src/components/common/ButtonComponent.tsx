import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
    type?: 'button' | 'submit';
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({text, onClick, type = 'button', fullWidth = false}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-indigo-900 hover:bg-indigo-600 text-white font-bold py-2 w-full ${fullWidth ? 'rounded-none' : 'rounded-lg'}`}
        >
            {text}
        </button>
    );
};

export default Button;
import React from 'react';

interface ActionButtonProps {
    onClick: () => void;
    text: string;
    icon: React.ReactNode;
    isActive?: boolean;
    extraClasses?: string;
}

const ActionButtonComponent: React.FC<ActionButtonProps> = ({ onClick, text, icon, isActive, extraClasses = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded w-[160px] ${extraClasses} ${
                isActive ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'}
                `}
        >
            {text}
            {icon}
        </button>
    );
};

export default ActionButtonComponent;
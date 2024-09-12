import React from 'react';

interface InputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const Input: React.FC<InputProps> = ({label, value, onChange, type = 'text'}) => {
    const inputId = label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="mb-4">
            <label
                htmlFor={inputId}
                className="block text-gray-700 text-sm font-bold mb-2"
            >
                {label}
            </label>
            <input
                id={inputId}
                type={type}
                value={value}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};

export default Input;
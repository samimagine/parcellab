import React, {useState} from 'react';
import {FcLock, FcUnlock} from "react-icons/fc";

interface LogOutButtonProps {
    onLogOut: () => void;
}

const LogOutButton: React.FC<LogOutButtonProps> = ({onLogOut}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onLogOut}
            className="flex items-center text-red-400 hover:text-red-500 focus:outline-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <FcUnlock className="w-6 h-6"/>
            ) : (
                <FcLock className="w-6 h-6"/>
            )}
            <span className="ml-2 font-bold">Sign out</span>
        </button>
    );
};

export default LogOutButton;
import React from 'react';

interface LogoProps {
    size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
    const sizeClasses = size === 'small' ? 'w-12 h-12' : size === 'large' ? 'w-32 h-32' : 'w-16 h-16 md:w-24 md:h-24';

    return (
        <img
            src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
            alt="Track Order parcelLab logo"
            className={`${sizeClasses} rounded-md md:rounded-3xl`}
        />
    );
};

export default Logo;
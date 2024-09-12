import React from 'react';
import {useNavigate} from 'react-router-dom';
import LogOutButton from './LogOutButtonComponent';

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <header className="flex flex-row justify-between p-6">
            <img
                src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
                alt="Track Order parcelLab logo"
                className="w-16 h-16 md:w-24 md:h-24 rounded-md md:rounded-3xl"
            />
            <LogOutButton onLogOut={() => navigate('/')}/>
        </header>
    );
};

export default Header;
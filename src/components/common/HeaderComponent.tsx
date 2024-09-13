import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogOutButton from './LogOutButtonComponent';
import Logo from './LogoComponent';

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <header className="flex flex-row justify-between p-6">
            <Logo size="medium" />
            <LogOutButton onLogOut={() => navigate('/')} />
        </header>
    );
};

export default Header;
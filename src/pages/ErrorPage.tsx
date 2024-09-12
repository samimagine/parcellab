import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/CardComponent';
import Button from '../components/common/ButtonComponent';
import Title from "../components/common/TitleComponent";

const Error: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Card>
            <Title size="small" text="Oops! We couldn’t find that order." />
            <p className="text-center text-gray-700 my-6">
                It looks like the order number or zip code doesn’t match. Double-check your details and try again! 😊
            </p>
            <Button text="Go Back" onClick={() => navigate('/')} />
        </Card>
    );
};

export default Error;
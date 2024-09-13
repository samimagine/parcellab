import React from 'react';
import Button from '../common/ButtonComponent';

interface MapButtonProps {
    city: string;
    country: string;
}

const MapButton: React.FC<MapButtonProps> = ({city, country}) => {
    const handleOpenMap = () => {
        const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(city)},${encodeURIComponent(country)}`;
        window.open(mapUrl, '_blank');
    };

    return (
        <Button text="Get directions" fullWidth={true} onClick={handleOpenMap}/>
    );
};

export default MapButton;
import React from 'react';
import MapButton from "./MapButtonComponent";

interface MapProps {
    imagePath: string;
    latestCheckpoint: {
        city: string;
        country_iso3: string;
    };
}

const MapComponent: React.FC<MapProps> = ({imagePath, latestCheckpoint}) => {
    return (
        <div className="flex flex-col">
            <img src={imagePath} alt="parcelLab map" className="w-full shadow border-2 rounded-2"/>
            <MapButton city={latestCheckpoint.city} country={latestCheckpoint.country_iso3}/></div>
    );
};

export default MapComponent;
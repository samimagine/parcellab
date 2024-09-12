import React from 'react';
import Title from '../common/TitleComponent';
import MapComponent from '../map/MapComponent';
import Card from '../common/CardComponent';

interface OrderSummaryProps {
    status: string;
    statusDetails: string;
    latestCheckpoint: {
        city: string;
        country_iso3: string;
    };
}

const OrderSummaryComponent: React.FC<OrderSummaryProps> = ({status, statusDetails, latestCheckpoint}) => {
    return (
        <Card noPadding={true} overflowHidden={true}>
            <div className="flex flex-col justify-between h-full">
                <div className="p-8">
                    <Title size="large" text={status}/>
                    <Title size="medium" text={statusDetails}/>
                </div>
                <MapComponent imagePath={process.env.PUBLIC_URL + '/assets/images/map.png'}
                              latestCheckpoint={latestCheckpoint}/>
            </div>
        </Card>
    );
};

export default OrderSummaryComponent;
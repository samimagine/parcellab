import React from 'react';
import Title from '../common/TitleComponent';
import Map from '../map/MapComponent';
import Card from '../common/CardComponent';

interface OrderSummaryProps {
    status: string;
    statusDetails: string;
    latestCheckpoint: {
        city: string;
        country_iso3: string;
    };
}

const OrderSummary: React.FC<OrderSummaryProps> = ({status, statusDetails, latestCheckpoint}) => {
    return (
        <Card noPadding={true} overflowHidden={true} overflowScroll={true}>
            <div className="flex flex-col justify-between h-full">
                <div className="p-8 mt-3">
                    <Title size="large" text={status}/>
                    <Title size="medium" text={statusDetails}/>
                </div>
                <Map imagePath={process.env.PUBLIC_URL + '/assets/images/map.png'}
                              latestCheckpoint={latestCheckpoint}/>
            </div>
        </Card>
    );
};

export default React.memo(OrderSummary);
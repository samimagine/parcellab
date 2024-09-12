import React from 'react';
import StatusProgress from './StatusProgressComponent';
import OrderStatusListComponent from './OrderStatusListComponent';
import Title from '../common/TitleComponent';
import Card from '../common/CardComponent';

interface Checkpoint {
    status_details: string;
    event_timestamp: string;
    status: string;
    country_iso3: string;
    city: string;
}

interface OrderStatusProps {
    status: string;
    checkpoints: Checkpoint[];
}

const OrderStatusComponent: React.FC<OrderStatusProps> = ({status, checkpoints}) => {
    return (
        <Card overflowHidden={true} overflowScroll={true}>
            <Title size="small" text="Shipping updates"/>
            <StatusProgress status={status}/>
            <OrderStatusListComponent checkpoints={checkpoints} limit={3}/>
        </Card>
    );
};

export default OrderStatusComponent;
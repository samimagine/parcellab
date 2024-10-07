import React from 'react';
import StatusProgress from './StatusProgressComponent';
import OrderStatusListComponent from './OrderStatusListComponent';
import Title from '../common/TitleComponent';
import Card from '../common/CardComponent';
import ShareLink from "../common/ShareLinkComponent";

export interface Checkpoint {
    status_details: string;
    event_timestamp: string;
    status: string;
    country_iso3: string;
    city: string;
}

interface OrderStatusProps {
    status: string;
    checkpoints: Checkpoint[];
    url: string;
}

const OrderStatus: React.FC<OrderStatusProps> = ({status, checkpoints, url}) => {
    return (
        <Card overflowHidden={true} overflowScroll={true}>
            <Title size="small" text="Shipping updates"/>
            <StatusProgress status={status}/>
            <ShareLink url={url}/>
            <OrderStatusListComponent checkpoints={checkpoints} limit={2}/>
        </Card>
    );
};

export default OrderStatus;
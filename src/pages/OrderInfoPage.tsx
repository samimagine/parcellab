import React from 'react';
import {useLocation} from 'react-router-dom';
import Header from '../components/common/HeaderComponent';
import OrderSummaryComponent from '../components/summary/OrderSummaryComponent';
import OrderStatusComponent from '../components/status/OrderStatusComponent';
import ArticlesComponent from '../components/articles/ArticlesComponent';

interface Checkpoint {
    status_details: string;
    event_timestamp: string;
    status: string;
    country_iso3: string;
    city: string;
}

const OrderInfoPage: React.FC = () => {
    const {state} = useLocation();
    const {orderDetails, checkpoints} = state || {};

    if (!orderDetails) {
        return <div>No order details available</div>;
    }

    const getLatestCheckpoint = (checkpoints: Checkpoint[]) => {
        return checkpoints.reduce((latest, current) => {
            return new Date(current.event_timestamp) > new Date(latest.event_timestamp) ? current : latest;
        }, checkpoints[0]);
    };

    const latestCheckpoint = getLatestCheckpoint(checkpoints);

    return (
        <div className="flex flex-col">
            <Header/>
            <div className="flex flex-col lg:flex-row gap-5 w-auto">
                <OrderSummaryComponent
                    status={latestCheckpoint.status}
                    statusDetails={latestCheckpoint.status_details}
                    latestCheckpoint={latestCheckpoint}
                />
                <OrderStatusComponent
                    status={latestCheckpoint.status}
                    checkpoints={checkpoints}
                />
                <ArticlesComponent
                    articles={orderDetails.delivery_info.articles}
                />
            </div>
        </div>
    );
};

export default OrderInfoPage;
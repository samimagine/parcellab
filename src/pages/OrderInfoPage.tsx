import React from 'react';
import {useLocation} from 'react-router-dom';
import Header from '../components/common/HeaderComponent';
import { getLatestCheckpoint } from '../utils/checkpoints';
import OrderSummary from '../components/summary/OrderSummaryComponent';
import OrderStatus from '../components/status/OrderStatusComponent';
import OrderArticles from '../components/articles/OrderArticlesComponent';

const OrderInfoPage: React.FC = () => {
    const {state} = useLocation();
    const {orderDetails, checkpoints} = state || {};

    if (!orderDetails) {
        return <div>No order details available</div>;
    }

    const latestCheckpoint = getLatestCheckpoint(checkpoints);

    return (
        <div className="flex flex-col">
            <Header/>
            <div className="flex flex-col lg:flex-row gap-5 w-auto">
                <OrderSummary
                    status={latestCheckpoint.status}
                    statusDetails={latestCheckpoint.status_details}
                    latestCheckpoint={latestCheckpoint}
                />
                <OrderStatus
                    status={latestCheckpoint.status}
                    checkpoints={checkpoints}
                />
                <OrderArticles
                    articles={orderDetails.delivery_info.articles}
                />
            </div>
        </div>
    );
};

export default OrderInfoPage;
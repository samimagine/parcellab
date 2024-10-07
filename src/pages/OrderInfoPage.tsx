import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../components/common/HeaderComponent';
import { getLatestCheckpoint } from '../utils/checkpoints';
import OrderSummary from '../components/summary/OrderSummaryComponent';
import OrderStatus from '../components/status/OrderStatusComponent';
import OrderArticles from '../components/articles/OrderArticlesComponent';
import { fetchOrderFromLocalhost, fetchOrderFromLocalMock } from '../utils/orderFetch';

const OrderInfoPage: React.FC = () => {
    const { state } = useLocation();
    const [searchParams] = useSearchParams();
    const [orderDetails, setOrderDetails] = useState<any>(state?.orderDetails || null);
    const [checkpoints, setCheckpoints] = useState<any[]>(state?.checkpoints || []);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const orderNumber = searchParams.get('order');
    const zipCode = searchParams.get('zip');

    useEffect(() => {
        const fetchOrder = async () => {
            if (!orderDetails && orderNumber && zipCode) {
                try {
                    let orderData = await fetchOrderFromLocalhost(orderNumber, zipCode);

                    if (!orderData) {
                        orderData = fetchOrderFromLocalMock(orderNumber);
                    }

                    setOrderDetails(orderData);
                    setCheckpoints(orderData.checkpoints);
                } catch (err: any) {
                    setError(err.message);
                    navigate('/error');
                }
            }
        };

        fetchOrder();
    }, [orderNumber, zipCode, orderDetails, navigate]);

    if (!orderDetails) {
        return <div>{error ? `Error: ${error}` : 'Loading order details...'}</div>;
    }

    const latestCheckpoint = getLatestCheckpoint(checkpoints);
    const currentUrl = document.location.href;

    return (
        <div className="flex flex-col">
            <Header />
            <div className="flex flex-col lg:flex-row gap-5 w-auto">
                <OrderSummary
                    status={latestCheckpoint.status}
                    statusDetails={latestCheckpoint.status_details}
                    latestCheckpoint={latestCheckpoint}
                />
                <OrderStatus
                    status={latestCheckpoint.status}
                    checkpoints={checkpoints}
                    url={currentUrl}
                />
                <OrderArticles
                    articles={orderDetails.delivery_info.articles}
                />
            </div>
        </div>
    );
};

export default OrderInfoPage;
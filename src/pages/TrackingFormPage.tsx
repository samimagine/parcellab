import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Card from '../components/common/CardComponent';
import Input from '../components/common/InputComponent';
import Button from '../components/common/ButtonComponent';
import Title from "../components/common/TitleComponent";
import orders from '../api/orders.json'; // Import the mock JSON file

const TrackingFormPage: React.FC = () => {
    const [orderNumber, setOrderNumber] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [, setCheckpoints] = useState([]);
    const navigate = useNavigate();

    const fetchOrderFromLocalhost = async () => {
        try {
            const response = await fetch(`http://localhost:3003/orders/${orderNumber}?zip=${zipCode}`);
            if (!response.ok) {
                throw new Error('Order not found or invalid zip code');
            }
            return await response.json();
        } catch (error) {
            console.error('Fetching from localhost failed, falling back to local mock data:', error);
            return null;
        }
    };

    const fetchOrderFromLocalMock = () => {
        const foundOrder = orders.find(order => order.delivery_info.orderNo === orderNumber);
        if (!foundOrder) {
            throw new Error('Order not found in local mock data');
        }
        return foundOrder;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        try {
            let orderData = await fetchOrderFromLocalhost();

            if (!orderData) {
                orderData = fetchOrderFromLocalMock();
            }

            setCheckpoints(orderData.checkpoints);
            navigate('/order-info', { state: { orderDetails: orderData, checkpoints: orderData.checkpoints } });
        } catch (err: any) {
            setError(err.message);
            navigate('/error');
        }
    };

    return (
        <Card>
            <img
                src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
                alt="Track Order parcelLab logo"
                className="w-24 h-24 rounded-3xl absolute top-[-50px] left-1/2 transform -translate-x-1/2"
            />
            <header className="flex flex-col justify-center items-center mt-7">
                <Title size="small" text="Track your order" />
                <p className="text-center text-slate-400 p">Enter your order number and zip code combination to see the order details and shipping updates.</p>
            </header>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Order Number"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                />
                <Input
                    label="Zip Code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                />
                <hr className="my-4" />
                <Button text="Track" type="submit" onClick={() => {}} />
            </form>

            {error && <div className="text-red-500 mt-4">Error: {error}</div>}
        </Card>
    );
};

export default TrackingFormPage;
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Card from '../components/common/CardComponent';
import Input from '../components/common/InputComponent';
import Button from '../components/common/ButtonComponent';
import Title from "../components/common/TitleComponent";
import { fetchOrderFromLocalhost, fetchOrderFromLocalMock } from '../utils/orderFetch';

const TrackingFormPage: React.FC = () => {
    const orderNumberRef = useRef<HTMLInputElement>(null);
    const zipCodeRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);
    const [validationError, setValidationError] = useState<string | null>(null);
    const [, setCheckpoints] = useState([]);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const urlOrderNumber = searchParams.get('order');
        const urlZipCode = searchParams.get('zip');
        if (urlOrderNumber && orderNumberRef.current) {
            orderNumberRef.current.value = urlOrderNumber;
        }
        if (urlZipCode && zipCodeRef.current) {
            zipCodeRef.current.value = urlZipCode;
        }
    }, [searchParams]);

    const validateForm = () => {
        const orderNumber = orderNumberRef.current?.value || '';
        const zipCode = zipCodeRef.current?.value || '';

        if (!orderNumber) {
            setValidationError('Order number is required');
            return false;
        }
        if (!zipCode) {
            setValidationError('Zip code is required');
            return false;
        }

        const orderNumberPattern = /^[A-Za-z0-9]+$/;
        const zipCodePattern = /^[0-9]{5}$/;

        if (!orderNumberPattern.test(orderNumber)) {
            setValidationError('Order number must be alphanumeric with no spaces or symbols');
            return false;
        }
        if (!zipCodePattern.test(zipCode)) {
            setValidationError('Zip code must be a 5-digit number');
            return false;
        }

        setValidationError(null);
        return true;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        if (!validateForm()) {
            return;
        }

        const orderNumber = orderNumberRef.current?.value || '';
        const zipCode = zipCodeRef.current?.value || '';

        try {
            let orderData = await fetchOrderFromLocalhost(orderNumber, zipCode);

            if (!orderData) {
                orderData = fetchOrderFromLocalMock(orderNumber);
            }

            setCheckpoints(orderData.checkpoints);
            setSearchParams({ order: orderNumber, zip: zipCode });

            navigate(`/order-info?order=${orderNumber}&zip=${zipCode}`, {
                state: { orderDetails: orderData, checkpoints: orderData.checkpoints }
            });
        } catch (err: any) {
            setError(err.message);
            navigate('/error');
        }
    };

    return (
        <Card height={520}>
            <img
                src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
                alt="Track Order parcelLab logo"
                className="w-24 h-24 rounded-3xl absolute top-[-50px] left-1/2 transform -translate-x-1/2"
            />
            <header className="flex flex-col justify-center items-center mt-7">
                <Title size="small" text="Track your order" />
                <p className="text-center text-slate-400 mb-4">Enter your order number and zip code combination to see the order details and shipping updates.</p>
            </header>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Order Number"
                    inputRef={orderNumberRef}
                />
                <Input
                    label="Zip Code"
                    inputRef={zipCodeRef}
                />
                <hr className="my-6" />
                <Button text="Track" type="submit" onClick={() => {}} />
            </form>
            {validationError && <div className="text-red-500 mt-4">Validation Error: {validationError}</div>}
            {error && <div className="text-red-500 mt-4">Error: {error}</div>}
        </Card>
    );
};

export default TrackingFormPage;
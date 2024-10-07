import orders from '../api/orders.json';

export const fetchOrderFromLocalhost = async (orderNumber: string, zipCode: string) => {
    try {
        const response = await fetch(`http://localhost:3003/orders/${orderNumber}?zip=${zipCode}`);
        if (!response.ok) {
            throw new Error('Order not found or invalid zip code');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetching from localhost failed:', error);
        return null;
    }
};

export const fetchOrderFromLocalMock = (orderNumber: string) => {
    const foundOrder = orders.find(order => order.delivery_info.orderNo === orderNumber);
    if (!foundOrder) {
        throw new Error('Order not found in local mock data');
    }
    return foundOrder;
};
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3003;

app.use(cors());

const ordersFilePath = path.join(__dirname, 'orders.json');

const getOrdersData = () => {
    const data = fs.readFileSync(ordersFilePath, 'utf8');
    return JSON.parse(data);
};

app.get('/orders/:orderNo', (req, res) => {
    const { orderNo } = req.params;
    const { zip } = req.query;

    const orders = getOrdersData();

    const order = orders.find(o => o.delivery_info.orderNo === orderNo);

    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }

    if (zip && order.zip_code !== zip) {
        return res.status(400).json({ message: 'Invalid zip code' });
    }

    res.json(order);
});

app.listen(PORT, () => {
    console.log(`Mock API server running on http://localhost:${PORT}/orders/:orderNo?zip={{zipCode}}`);
});
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import TrackingForm from './pages/TrackingFormPage';
import Error from './pages/ErrorPage';
import OrderInfo from './pages/OrderInfoPage';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Routes>
                <Route path="/" element={<TrackingForm/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route path="/order-info" element={<OrderInfo/>}/>
            </Routes>
        </div>
    );
};

export default App;
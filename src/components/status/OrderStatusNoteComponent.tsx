import React from 'react';

interface OrderStatusNoteProps {
    title: string;
    message: string;
    date: string;
    location: string;
}

const OrderStatusNote: React.FC<OrderStatusNoteProps> = ({title, message, date, location}) => {
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);

        return date.toLocaleString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
    };
    return (
        <div className="pb-4 rounded-lg">
            <h2 className="text-gray-950 font-bold text-lg">{title}</h2>
            <p className="text-gray-700 text-base leading-tight mb-2">{message}</p>
            <div className="flex flex-row justify-between text-gray-400 font-bold">
                <p>{location}</p>
                <p>{formatDate(date)}</p>

            </div>
        </div>
    );
};

export default OrderStatusNote;
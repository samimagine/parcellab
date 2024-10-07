import React, {useState} from 'react';
import OrderStatusNote from './OrderStatusNoteComponent';

interface Checkpoint {
    status_details: string;
    event_timestamp: string;
    status: string;
    country_iso3: string;
    city: string;
}

interface OrderStatusListProps {
    checkpoints: Checkpoint[];
    limit?: number;
}

const OrderStatusList: React.FC<OrderStatusListProps> = ({checkpoints, limit = 3}) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => setShowAll(!showAll);

    const visibleCheckpoints = showAll ? checkpoints : checkpoints.slice(0, limit);
    console.log(visibleCheckpoints);

    return (
        <div>
            {visibleCheckpoints.map((checkpoint, index) => (
                <OrderStatusNote
                    key={index}
                    title={checkpoint.status}
                    message={checkpoint.status_details}
                    date={checkpoint.event_timestamp}
                    location={`${checkpoint.city}, ${checkpoint.country_iso3}`}
                />
            ))}

            {checkpoints.length > limit && (
                <div className="flex flex-col justify-center items-center">
                    <button
                        onClick={toggleShowAll}
                        className="mt-4 text-gray-400 font-bold hover:underline focus:outline-none"
                    >
                        {showAll ? 'less' : 'more'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrderStatusList;
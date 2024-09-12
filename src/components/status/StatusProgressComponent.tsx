import React from 'react';

interface StatusProgressProps {
    status: string;
}

const StatusProgress: React.FC<StatusProgressProps> = ({status}) => {
    let progress = 0;

    switch (status.toLowerCase()) {
        case 'registered':
            progress = 25;
            break;
        case 'in transit':
            progress = 50;
            break;
        case 'out for delivery':
        case 'new delivery date set':
        case 'failed delivery attempt':
            progress = 75;
            break;
        case 'ready for collection':
            progress = 100;
            break;
        default:
            progress = 0;
            break;
    }

    return (
        <div className="flex flex-col pbs-4">
            <div className="bg-gray-300 h-6 w-full rounded-xl">
                <div className="bg-indigo-900 h-6 rounded-xl" style={{width: `${progress}%`}}></div>
            </div>
            <div className="flex flex-row justify-between font-bold text-gray-400 mt-2">
                <span>Processed</span>
                <span>Delivered</span>

            </div>
        </div>
    );
};

export default StatusProgress;
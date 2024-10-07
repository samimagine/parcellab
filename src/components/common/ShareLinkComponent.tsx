import React, { useState, useEffect } from 'react';
import { FaCopy, FaCheck, FaShare } from 'react-icons/fa';
import ActionButton from './ActionButtonComponent';

interface ShareLinkButtonProps {
    url: string;
}

const ShareLinkButtonComponent: React.FC<ShareLinkButtonProps> = ({ url }) => {
    const [isCopied, setIsCopied] = useState(false);
    const [canShare, setCanShare] = useState(false);

    useEffect(() => {
        if (typeof (navigator as any).share === 'function') {
            setCanShare(true);
        }
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const handleShare = () => {
        if ((navigator as any).share) {
            (navigator as any).share({
                title: document.title,
                url,
            }).catch((err: any) => {
                console.error('Failed to share: ', err);
            });
        }
    };

    return (
        <div className="flex flex-row justify-between pb-4">
            {/* Copy Button */}
            <ActionButton
                onClick={handleCopy}
                text={isCopied ? 'Copied!' : 'Copy link'}
                icon={isCopied ? <FaCheck /> : <FaCopy />}
                isActive={isCopied}
                extraClasses="hover:text-indigo-500"
            />
            {canShare && (
                <ActionButton
                    onClick={handleShare}
                    text="Share"
                    icon={<FaShare />}
                    extraClasses="hover:text-indigo-500"
                />
            )}
        </div>
    );
};

export default ShareLinkButtonComponent;
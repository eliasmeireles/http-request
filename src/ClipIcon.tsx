import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {toast} from 'react-toastify';
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

interface ClipIconProps {
    target: string;
    size?: SizeProp;
}

const ClipIcon: React.FC<ClipIconProps> = ({target, size}) => {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success('Copied to clipboard', {
                    position: 'top-right'
                });
            })
            .catch((err) => console.error('Failed to copy: ', err));
    };

    return (
        <FontAwesomeIcon
            color="black"
            icon={faCopy}
            size={size ?? 'xs'}
            className="copy-icon"
            onClick={() => copyToClipboard(target)}
        />
    );
};

export default ClipIcon;

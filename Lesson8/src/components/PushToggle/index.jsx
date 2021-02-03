import React from 'react';
import './styles.css';

const PushToggle = (props) => {
    return (
        <div className="push">
            <img className="push__image" src="/src/components/PushToggle/images/push-off.png" alt="Push Notification"/>
        </div>
    );
};

export default PushToggle;
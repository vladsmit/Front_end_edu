import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';

const InstallPopup = (props) => {
    const [isShown, setIsShown] = useState(() => {
        return false;
    });

    useEffect(() => {
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone/.test(userAgent);
        };
        
        const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

        if (isIos() && !isInStandaloneMode()) {
            handleShow();
        }
    }, []);

    const handleShow = useCallback(() => {
        setIsShown(() => {
            return true;
        });
    }, [isShown]);

    const handleHide = useCallback(() => {
        setIsShown(() => {
            return false;
        });
    }, [isShown]);

    return (
        <div style={ { display: isShown ? 'block' : 'none' } } className="speech-bubble-container">
            <div className="speech-bubble">
                <input className="textField__deleteBtn close-install-message-icon" type="button" value="x" onClick={handleHide}/>
                <div style={ { paddingRight: '15px' } }>Установи приложение на свой iPhone: нажми "Поделиться", а затем на  экран "Домой"</div>
            </div>
        </div>
    );
};

export default InstallPopup;
import React from 'react';
import { IconContainer } from '@epam/promo';
import { ReactComponent as EmptyNotification } from '@epam/assets/icons/common/notification-warning-outline-18.svg';
import { ReactComponent as Notification } from '@epam/assets/icons/common/notification-warning-fill-18.svg';

export default function BasicIconContainerExample() {

    const OnClickFunction = () => {
        
    }

    return (
        <>
            <IconContainer icon={ EmptyNotification } onClick={ () => null } />
            <IconContainer icon={ Notification } color='blue' 
            flipY={ true } isDisabled={ true } onClick={ () => null } />
            <IconContainer icon={ Notification } color='violet' 
            style={ { 'transform': 'skew(-15deg, 18deg)' } } onClick={ () => null } />
        </>
    );
}

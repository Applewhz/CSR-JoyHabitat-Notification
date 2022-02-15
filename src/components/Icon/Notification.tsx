import React, { useState } from 'react';
import { IconContainer, IconButton } from '@epam/promo';
import { ReactComponent as EmptyNotification } from '@epam/assets/icons/common/notification-warning-outline-18.svg';
import { ReactComponent as Notification } from '@epam/assets/icons/common/notification-warning-fill-18.svg';
import { Dropdown, DropdownBodyProps } from '@epam/uui-components';
import { LinkButton, Button, Panel, Text, FlexRow } from "@epam/promo";
import BasicNotificationCardExample from './NotificationCard';
import { IDropdownToggler } from '@epam/uui';

export default function BasicIconContainerExample() {
    
    const [showNotification, setShowNotification] = useState(false);

    const renderDropdownBody = (props: DropdownBodyProps) => {
        return (
            <Panel background='white' shadow={ true }>
            <FlexRow padding='12' vPadding='12'>
                <Text>Dropdown body content.</Text>
                <LinkButton caption='Click to close' onClick={ props.onClose } />
            </FlexRow>
        </Panel>
    );
    };

  return (
    <>
        <Dropdown
        renderBody={ renderDropdownBody }
        renderTarget={ (props: IDropdownToggler) => <IconButton icon={EmptyNotification} { ...props } /> }
        />
    </>
  );
}

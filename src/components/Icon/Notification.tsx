import React, { useState } from 'react';
import { IconContainer, IconButton } from '@epam/promo';
import { ReactComponent as EmptyNotification } from '@epam/assets/icons/common/notification-warning-outline-18.svg';
import { ReactComponent as Notification } from '@epam/assets/icons/common/notification-warning-fill-18.svg';
import { Dropdown, DropdownBodyProps } from '@epam/uui-components';
import { LinkButton, Button, Panel, Text, FlexRow, FlexCell, NotificationCard } from "@epam/promo";
import { IDropdownToggler } from '@epam/uui';
import css from './NotificationCard.module.scss';

export default function BasicIconContainerExample() {

    const actions = [
        { name: 'Ok', action: () => {} },
        { name: 'Cancel', action: () => {} },
    ];

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

    const renderDropdownBodyTest = (props: DropdownBodyProps) => {
        return (
            <Panel background='white' shadow={ true }>
            <FlexCell cx={css.container}>
        <NotificationCard
          id={1}
          key={'keyProps'}
          color="gray60"
          onClose={() => null}
          onSuccess={() => null}
        >
          <Text size="36" font="sans" fontSize="14">
            Common notification
          </Text>
        </NotificationCard>
      </FlexCell>
      <FlexCell width={350} cx={css.container}>
        <NotificationCard
          id={1}
          key={'propsKey'}
          actions={actions}
          color="amber"
          onClose={() => null}
          onSuccess={() => null}
        >
          <Text size="36" font="sans" fontSize="14">
            Warning notification with some buttons
          </Text>
        </NotificationCard>
      </FlexCell>
        </Panel>
        );
    };

  return (
    <>
        <Dropdown
        renderBody={ renderDropdownBody }
        renderTarget={ (props: IDropdownToggler) => <IconButton icon={EmptyNotification} { ...props } /> }
        />
        {/* <BasicNotificationCardExample /> */}
        <Dropdown
        renderBody={ renderDropdownBodyTest }
        renderTarget={ (props: IDropdownToggler) => <IconButton icon={EmptyNotification} { ...props } /> }
        />
    </>
  );
}

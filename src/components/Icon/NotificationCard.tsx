import React from 'react';
import { FlexCell, NotificationCard, Text } from '@epam/promo';
import css from './NotificationCard.module.scss';

export default function BasicNotificationCardExample() {
  const actions = [
    { name: 'Ok', action: () => {} },
    { name: 'Cancel', action: () => {} },
  ];

  return (
    <>
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
    </>
  );
}

import React from 'react';
import { Ripple } from '../Ripple/Ripple';
import { ApplicationCard, IApplicationCardProps } from './ApplicationCard';

export const TWAApplicationCard = (props: IApplicationCardProps) => {
  return (
    <Ripple>
      <ApplicationCard
        noFocus
        {...(props || {})}
      />
    </Ripple>
  );
};

import React from 'react';
import { TWACategory } from '../../../types/entities';
import { TheOpenLeagueIcon } from '../../svg/TheOpenLeagueIcon';

export const getIcon = (category: TWACategory) => {
  return (
    category.attributes.path === 'theopenleague'
      ? <TheOpenLeagueIcon/>
      : <img src={category.attributes.icon?.data?.attributes.url}/>
  );
};

import React, { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { BlockData } from '../../../types/Blocks';
import { TWAApplication, TWACategory } from '../../../types/entities';
import { useMixpanel } from '../../hooks/hooks';
import { reorderApps, useActiveCategory } from './utils';

interface IDataContextProps {
  categories: Array<TWACategory>;
  appsRanking: Array<number>,
  applications: Array<TWAApplication>;
  visibleApplications: Array<TWAApplication>;
  activeCategory?: TWACategory;
  mainPageBlockConfig?: Array<BlockData>;
  navigationConfig?: Array<TWACategory>;
  setActiveCategory: (category: TWACategory) => void;
  getActiveCategory?: () => TWACategory | void;
}

interface IDataProviderProps {
  categories?: Array<TWACategory>;
  appsRanking?: Array<number>;
  applications?: Array<TWAApplication>;
  mainPageBlockConfig?: Array<BlockData>;
  navigationConfig?: Array<TWACategory>;
}

const DataContext = React.createContext<IDataContextProps>({
  categories: [],
  appsRanking: [],
  applications: [],
  visibleApplications: [],
  mainPageBlockConfig: [],
  navigationConfig: [],
  setActiveCategory: () => void 0,
});

export const DataProvider: React.FC<PropsWithChildren<IDataProviderProps>> = (props) => {
  useMixpanel();

  const location = useLocation();

  const {
    categories = [],
    appsRanking = [],
    applications = [],
    navigationConfig = [],
    mainPageBlockConfig = [],
  } = props;

  const {
    activeCategory,
    setActiveCategory,
    getActiveCategory,
  } = useActiveCategory(location.pathname, categories);

  const visibleApplications = React.useMemo(() => {
    return reorderApps(applications, appsRanking);
  }, [activeCategory, applications, appsRanking]);

  const contextValue = {
    categories,
    appsRanking,
    applications,
    activeCategory,
    navigationConfig,
    getActiveCategory,
    setActiveCategory,
    visibleApplications,
    mainPageBlockConfig,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => React.useContext(DataContext);

import React, { PropsWithChildren } from 'react';
import { TWAApplication } from '../../types/entities';
import { useMixpanel } from '../hooks/hooks';

interface IApplicationContext {
    error?: string,
    application?: TWAApplication | null,
    isLoading?: boolean,
}

const ApplicationContext = React.createContext<IApplicationContext>({});

interface IApplicationProviderProps {
    application?: TWAApplication | null;
    error?: string;
    isLoading?: boolean;
}

export const ApplicationProvider: React.FC<PropsWithChildren<IApplicationProviderProps>> = (props) => {
    useMixpanel();

    return (
        <ApplicationContext.Provider
            value={{
                application: props.application,
                error: props.error,
                isLoading: props.isLoading
            }}
        >
            {props.children}
        </ApplicationContext.Provider>
    )
};

export const useApplicationContext = () => React.useContext(ApplicationContext);

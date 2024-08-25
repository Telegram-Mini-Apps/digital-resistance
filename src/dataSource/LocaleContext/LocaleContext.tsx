import i18n from 'i18next';
import React, { useState, PropsWithChildren } from 'react';
import { setItemToStorage } from '../../hooks/hooks';
import { initI18n, LOCALES } from './i18n';

interface ILocaleContextProps {
    changeLocale?: (locale: LOCALES) => void,
    locale: LOCALES,
}

export const LocaleContext = React.createContext<ILocaleContextProps>({
    locale: LOCALES.EN,
});

interface ILocaleProviderProps {
}

initI18n();

export const LocaleProvider: React.FC<PropsWithChildren<ILocaleProviderProps>> = (props) => {
    const [locale, setLocale] = useState(i18n.language as LOCALES);

    const changeLocale = (value: LOCALES) => {
        i18n.changeLanguage(value);
        setItemToStorage("locale", value);
        setLocale(value);
    };

    const contextValue = {
        changeLocale,
        locale,
    };

    return (
        <LocaleContext.Provider value={contextValue}>
            {props.children}
        </LocaleContext.Provider>
    );
}

export const useLocaleContext = () => React.useContext(LocaleContext);

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TWAApplication, TWACategory } from '../../../types/entities';

export const getActiveCategoryFromPathname = (pathname: string, categories: Array<TWACategory>) => {
    const [,categoryFromPath] = pathname.split('/');

    return categories?.find(
        (category) => {
            return category.attributes.path && categoryFromPath === category.attributes.path
        }
    );
}

export const useActiveCategory = (pathname: string, categories: Array<TWACategory>) => {
    const navigate = useNavigate();

    const [
        activeCategory,
        setActiveCategory,
    ] = React.useState<TWACategory | undefined>(getActiveCategoryFromPathname(pathname, categories));

    const getActiveCategory = () => {
        return activeCategory || getActiveCategoryFromPathname(pathname, categories);
    };

    useEffect(() => {
        setActiveCategory(getActiveCategoryFromPathname(pathname, categories));
    }, [categories, pathname]);

    return {
        activeCategory,
        getActiveCategory,
        setActiveCategory: (category: TWACategory) => {
            if (category?.attributes.path
                && category?.attributes.path !== '/'
                && window.location.pathname.includes(category?.attributes.path)
            ) {
                return;
            }

            navigate(`/${category?.attributes.path}`);
        },
    }
};

export const reorderApps = (applications: Array<TWAApplication> | null = [], appsRanking: Array<number>, disableReorder?: boolean) => {
    if (!applications) {
        return [];
    }

    if (disableReorder) {
        return applications;
    }

    let apps = applications;

    // TODO(Dimitreee): remove this mess
    apps.sort((a, b) => {
        const aRank = appsRanking.indexOf(a.id);
        const bRank = appsRanking.indexOf(b.id);

        let leftWeigh = aRank >= 0 ? apps.length - aRank : -1;
        let rightWeigh = bRank >= 0 ? apps.length - bRank : -1;

        if (a.attributes.editors_choice) leftWeigh += 100;
        if (b.attributes.editors_choice) rightWeigh += 100;

        if (leftWeigh > rightWeigh) return -1;
        if (leftWeigh < rightWeigh) return 1;

        return 0;
    })

    return apps
}

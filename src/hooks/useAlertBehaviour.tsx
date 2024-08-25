import { useLayoutEffect, useState } from 'react'
import { TWACategory } from '../../types/entities'
import { useCloudStorage } from './hooks'

interface IUseAlertBehaviour {
    category?: TWACategory;
}

export const useAlertBehaviour = (props: IUseAlertBehaviour) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const storage = useCloudStorage();

    const handleClose = () => {
        setIsVisible(false);
        storage.setItemToStorage(props.category?.attributes?.alert?.data?.attributes?.key!, true)
    }

    useLayoutEffect(() => {
        if (!props.category?.attributes?.alert?.data?.attributes?.key) {
            setIsLoading(false)
            return;
        }

        storage.getItemFromStorage(props.category?.attributes?.alert?.data?.attributes?.key)
            .then((res) => {
                if (!res) {
                    setIsVisible(true);
                }

                setIsLoading(false)
        })
            .catch(() => {
                setIsLoading(false)
            })
    }, [props.category])

    return {
        isLoading,
        isVisible,
        handleClose,
    }

}

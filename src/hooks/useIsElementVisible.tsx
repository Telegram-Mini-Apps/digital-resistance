import { useEffect, useState } from "react";

const useIsElementVisible = (target: Element | null) => {
    const [
        isVisible,
        setIsVisible,
    ] = useState<boolean | null>(null);

    useEffect(() => {
        if (target) {
            const observer = new IntersectionObserver(
                onVisibilityChange,
                { rootMargin: "100%" },
            );
            observer.observe(target);
        }
    }, [target]);

    const onVisibilityChange = (entries: IntersectionObserverEntry[]) => setIsVisible(entries[0]?.isIntersecting);

    return isVisible;
};

export default useIsElementVisible;

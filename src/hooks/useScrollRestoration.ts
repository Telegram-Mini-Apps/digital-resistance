import { atom, useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";
import { debounce } from '../utils/common';

const scrollRestorationAtom = atom<
    Record<string, { scrollTop: number; scrollLeft: number }>
>({});

interface ScrollRestorationOptions {
    debounceTime?: number;
    persist?: false | "localStorage" | "sessionStorage";
}

export function useScrollRestoration<U extends HTMLElement>(
    key: string,
    { debounceTime = 100, persist = false }: ScrollRestorationOptions = {}
) {
    const [scrollRestoration, setScrollRestoration] = useAtom(
        scrollRestorationAtom
    );
    const [element, setElement] = useState<U | null>(null);
    const ref = useCallback((element: U | null) => {
        if (element) {
            setElement(element);
        }
    }, []);

    const currentScrollRestoration = scrollRestoration[key];
    const hasRestoration = key in scrollRestoration;

    useEffect(() => {
        if (!element) return;

        const handleScroll = debounce(() => {
            const scrollTop = element.scrollTop;
            const scrollLeft = element.scrollLeft;

            setScrollRestoration((prevScrollRestoration) => ({
                ...prevScrollRestoration,
                [key]: { scrollTop, scrollLeft },
            }));
        }, debounceTime);

        element.addEventListener("scroll", handleScroll);
        return () => {
            element.removeEventListener("scroll", handleScroll);
        };
    }, [debounceTime, key, element, persist, setScrollRestoration]);

    useEffect(() => {
        if (!element) return;

        if (hasRestoration) {
            element.scrollTo(
                currentScrollRestoration.scrollLeft,
                currentScrollRestoration.scrollTop
            );
        } else {
            let initialScrollRestoration = {
                scrollTop: element.scrollTop,
                scrollLeft: element.scrollLeft,
            };

            if (persist === "localStorage") {
                const savedScrollRestoration = localStorage.getItem(
                    `scrollRestoration-${key}`
                );
                if (savedScrollRestoration) {
                    initialScrollRestoration = JSON.parse(savedScrollRestoration);
                }
            }

            if (persist === "sessionStorage") {
                const savedScrollRestoration = sessionStorage.getItem(
                    `scrollRestoration-${key}`
                );

                if (savedScrollRestoration) {
                    initialScrollRestoration = JSON.parse(savedScrollRestoration);
                }
            }

            setScrollRestoration((prevScrollRestoration) => ({
                ...prevScrollRestoration,
                [key]: initialScrollRestoration,
            }));
        }
    }, [
        currentScrollRestoration,
        element,
        key,
        persist,
        hasRestoration,
        setScrollRestoration,
    ]);

    useEffect(() => {
        if (!persist || !currentScrollRestoration) return;

        if (persist === "localStorage") {
            localStorage.setItem(
                `scrollRestoration-${key}`,
                JSON.stringify(currentScrollRestoration)
            );
        } else if (persist === "sessionStorage") {
            sessionStorage.setItem(
                `scrollRestoration-${key}`,
                JSON.stringify(currentScrollRestoration)
            );
        }
    }, [key, persist, currentScrollRestoration]);

    const setScroll = ({ x, y }: { x?: number; y?: number }) => {
        setScrollRestoration((prevScrollRestoration) => ({
            ...prevScrollRestoration,
            [key]: {
                scrollLeft: x !== undefined ? x : prevScrollRestoration[key].scrollLeft,
                scrollTop: y !== undefined ? y : prevScrollRestoration[key].scrollTop,
            },
        }));
    };

    return { ref, setScroll };
}

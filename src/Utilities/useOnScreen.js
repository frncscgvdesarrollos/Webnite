
//Requiere => npm install intersection-observer

import { useEffect, useState } from 'react';

const useOnScreen = (ref, rootMargin = '0px') => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        let observer;
        if (typeof window !== 'undefined' && window.IntersectionObserver) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    setIntersecting(entry.isIntersecting);
                },
                { rootMargin }
            );
            if (ref.current) {
                observer.observe(ref.current);
            }
        }
        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [ref, rootMargin]);

    return isIntersecting;
};

export default useOnScreen;

/*
Esta función utiliza el hook useEffect para crear y configurar un IntersectionObserver. El IntersectionObserver se encarga de observar el elemento al que se le pasa la referencia (ref) y actualizar el estado isIntersecting en función de si el elemento está visible en la pantalla o no.
*/
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from 'gsap';


export const useCounter = ({ maxCount = 10 }) => {

    const [counter, setCounter] = useState( 5 );
    const elementToAnimate = useRef<HTMLHeadingElement>(null);

    const tl = useRef( gsap.timeline() );

    const handleClick = () => {
        setCounter( prev => Math.min( prev + 1, maxCount ) )
    }

    useLayoutEffect(() => {        
        if( !elementToAnimate.current ) return;
        tl.current.to(elementToAnimate.current, { y: -100, x: 230, duration: 0.5, ease: 'ease.out' })
                  .to(elementToAnimate.current, { y: -55, x: 230, duration: 0.5, ease: 'bounce.out' })
                  .pause()        
    }, [])

    useEffect(() => {
        if(counter < maxCount) return;
        tl.current.play(0)
    }, [counter])

    return {
        counter,
        elementToAnimate,
        handleClick
    }
}
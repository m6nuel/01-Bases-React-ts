import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => { 

    const [counter, setCounter] = useState( 5 );
    const counterElement = useRef<HTMLHeadingElement>(null)

    const handleClick = () => {
        setCounter( prev => Math.min( prev + 1, MAXIMUN_COUNT ) )
        // if( counter < 10 ) {
        //     setCounter( prev => prev + 1 );
        // }
    }

    useEffect(() => {
        if (counter < 10) return;

        console.log('%c Se llego al valor maximo', 'color: red; background-color: black;');
        
        const tl = gsap.timeline();

        tl.to(counterElement.current, { y: -100, x: 230, duration: 0.5, ease: 'ease.out' })
          .to(counterElement.current, { y: -55, x: 230, duration: 0.5, ease: 'bounce.out' })
        
        // gsap.to(counterElement.current, { y: -100, x: 230, duration: 0.5, ease: 'ease.out' }).then( () => {
        //     gsap.to(counterElement.current, { y: -55, x: 230, duration: 0.5, ease: 'bounce.out' })
        // })
    }, [counter])
    

    return (
        <>
            <h1>CounterEffect: </h1>
            <h2 ref={ counterElement }> { counter } </h2>

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}

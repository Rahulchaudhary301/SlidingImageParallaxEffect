import React, { useEffect, useState } from 'react'
import '../index.css'
import hil from '../imgs/hill1.png'
import hill2 from '../imgs/hill2.png'
import hill3 from '../imgs/hill3.png'
import hills from '../imgs/hill4.png'
import hillss from '../imgs/hill5.png'
import tree from '../imgs/tree.png'
import leafs from '../imgs/leaf.png'
import plant from '../imgs/plant.png'






function HomePage() {

    const text = document.getElementById('text')
    const leaf = document.getElementById('leaf')
    const hill1 = document.getElementById('hill1')
    const hill4 = document.getElementById('hill4')
    const hill5 = document.getElementById('hill5')


    const [value, setValue] = useState(0)



    const updateMargin = () => {
        const scrollPosition = window.scrollY;
        setValue(scrollPosition);
    };

    if (value > 0 && value < 120) {
        text.style.marginTop = value * -1.9 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        hill5.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
        hill1.style.top = value * 1 + 'px';
    }



    useEffect(() => {
        window.addEventListener('scroll', updateMargin);

    }, []);



    return (
        <>
            <section className='main'>
                <img src={hil} id='hill1' alt='hil'></img>
                <img src={hill2} id='hill2' alt='hill2'></img>
                <img src={hill3} id='hill3' alt='hill3'></img>
                <img src={hills} id='hill4' alt='hills'></img>
                <img src={hillss} id='hill5' alt='hillss'></img>
                <img src={tree} id='tree' alt='tree'></img>
                <h2 id='text' className='parallax'>Parallax Effects</h2>
                <img src={leafs} id='leaf' alt='leafs'></img>
                <img src={plant} id='plant' alt='plant'></img>
            </section>
        </>
    )
}

export default HomePage

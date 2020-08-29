import React, { useEffect } from 'react'
import Slider from './Slider'
import Sponsor from './Sponsor'
import ServiceZone from './ServiceZone'
import PricingContainer from './PricingContainer'
import About from './About'
import TheCar from './TheCar'
import HowItWorks from './HowItWorks'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Main() {
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
    return (
        <>
            <Slider />
            <div data-aos="fade-up" className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 flex flex-wrap justify-evenly xl:ml-16 mr-0">
                <Sponsor img="/img/sponsors/sp1.png" link_url="http://google.com" />    
                <Sponsor img="/img/sponsors/sp2.png" link_url="http://google.com" />
                <Sponsor img="/img/sponsors/sp3.png" link_url="http://google.com" />
                <Sponsor img="/img/sponsors/sp4.png" link_url="http://google.com" />
                <Sponsor img="/img/sponsors/sp5.png" link_url="http://google.com" />
                <Sponsor />
            </div>
            <div data-aos="fade-right"><About /></div>
            <div data-aos="fade-up"><HowItWorks /></div>
            <div data-aos="fade-up"><ServiceZone /></div>
            <div data-aos="fade-up"><PricingContainer /></div>
            <div data-aos="fade-up"><TheCar /></div>
        </>
    )
}
export default Main;
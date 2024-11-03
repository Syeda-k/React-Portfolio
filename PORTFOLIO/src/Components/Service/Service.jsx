import React from 'react'
import serviceCSS from '../Service/Service.module.css';
import { Tilt } from "react-tilt";
export default function Service() {
    return (
        <div className={`${serviceCSS.ServiceWrapper} section`} id='service'>
            <h2>What I Do</h2>
            <p className={serviceCSS.pera}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ! Excepturi ducimus molestias temporibus aliquid soluta?</p>
           
            <div className={serviceCSS.ServiceCards}>
                <Tilt>
                <div className={serviceCSS.ServiceCard}>
                    <i className='ri-database-line'></i>
                    <h3>Web Development</h3>
                    <p>consectetur adipisicing elit. Ipsam, ! Excepturi ducimus molestias
                    temporibus aliquid soluta?</p>
                        <h4>Learn More<i className="ri-arrow-right-line"></i></h4>               
                         </div>
                         </Tilt>
                         <Tilt>
                <div className={serviceCSS.ServiceCard}>
                    <i  className='ri-smartphone-line'></i>
                    <h3>App Development</h3>
                    <p> consectetur adipisicing elit. Ipsam, ! Excepturi ducimus molestias
                        temporibus aliquid soluta?</p>
                    <h4>Learn More<i className="ri-arrow-right-line"></i></h4>
                    </div>
                    </Tilt>
                    <Tilt>
                <div className={serviceCSS.ServiceCard}>
                    <i className='ri-pantone-line'></i>
                    <h3>UI/UX Design</h3>
                    <p> consectetur adipisicing elit. Ipsam, ! Excepturi ducimus molestias temporibus aliquid soluta?</p>
                    <h4>Learn More<i className="ri-arrow-right-line"></i></h4>
                    </div>
                    </Tilt>
            </div>
        </div>
    )
}

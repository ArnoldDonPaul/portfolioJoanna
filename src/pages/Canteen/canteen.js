import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages.scss';

import canteen1 from '../../assets/images/canteen/canteen-live-eat-1618.jpg'
import canteen2 from '../../assets/images/canteen/canteen-redesign_Page_1.jpg'
import canteen3 from '../../assets/images/canteen/canteengif2.gif'
import canteen4 from '../../assets/images/canteen/Canteen-Blue-Jays-Promo-5971-2_JPG.jpg'
import canteen5 from '../../assets/images/canteen/Canteen-Blue-Jays-Promo-5889_JPG.jpg'
import canteen6 from '../../assets/images/canteen/canteen-redesign.jpg'
import canteen7 from '../../assets/images/canteen/ezgif-2-258dd2291053.gif'

class Canteen extends Component {
    render() {
        return (
            <section className="project">
                <h1 className="project__title">canteen</h1>
                <h2 className="project__subtitle">typography / art direction</h2>
                <img className="project__image" alt="Canteen" src={canteen1}></img>
                <div className="project__textBox">
                    <p className="project__text">CANTEEN is a Toronto restaurant located in the TIFF building on King street. This casual restaurant was assigned during my position as Junior Designer at Oliver & Bonacini Hospitality.
                    Breathing life into an old brand that lost its way, we reintroduced bold colours, animations, illustrations and an overall concept of duality.
                </p>
                    <div className="project__textBox">
                        <p className="project__text"><span className="emphasis">Art Direction:</span> Joanna Don Paul</p>
                        <p className="project__text"><span className="emphasis">Illustrations:</span> Yukiko Suzuki</p>
                        <p className="project__text"><span className="emphasis">Photography:</span> Pauline Yu, Cindy La</p>
                    </div>
                </div>

                <img className="project__image" alt="Canteen" src={canteen2}></img>
                <img className="project__image" alt="Canteen" src={canteen3}></img>
                <img className="project__image" alt="Canteen" src={canteen4}></img>
                <img className="project__image" alt="Canteen" src={canteen5}></img>
                <img className="project__image" alt="Canteen" src={canteen6}></img>
                <img className="project__image" alt="Canteen" src={canteen7}></img>
            
                <div className="project__nav">
                    <Link to='/eNewsletter' className="project__last">&lt; Last Project: E-Newsletter</Link>
                    <Link to='/littleFoot' className="project__next">Next Project: Little Foot &gt;</Link>
                </div>
            </section>
        );
    }
}

export default Canteen;
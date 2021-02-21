import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages.scss';

import buffo1 from '../../assets/images/buffo/IMG_1378.jpg'
import buffo2 from '../../assets/images/buffo/buffo.jpg'
import buffo3 from '../../assets/images/buffo/buffo-menu2.jpg'
import buffo4 from '../../assets/images/buffo/buffo-menu3.jpg'
import buffo5 from '../../assets/images/buffo/buffo-menu1.jpg'
import buffo6 from '../../assets/images/buffo/BUFFO_Updated-1.jpg'
import buffo7 from '../../assets/images/buffo/IMG_4843.jpg'

class Buffo extends Component {
    render() {
        return (
            <section className="project">
                <h1 className="project__title">buffo</h1>
                <h2 className="project__subtitle">branding / typography</h2>
                <img className="project__image" alt="Buffo" src={buffo1}></img>
                <div className="project__textBox">
                    <p className="project__text">BUFFO is a Calgary based Italian restaurant
                    developed during my time as Junior Designer
                    at Oliver &amp; Bonacini Hospitality. Inspired by
                    classical comedy and Italian playing cards,
                    Buffo was a fun exploration of traditional
                    and nontraditional Italian aesthetics.
                </p>
                    <div className="project__textBox">
                        <p className="project__text"><span className="emphasis">Design:</span> Joanna Don Paul</p>
                        <p className="project__text"><span className="emphasis">Art Direction:</span> Allison Woo</p>
                        <p className="project__text"><span className="emphasis">Photography:</span> Cindy La</p>
                        <p className="project__text"><span className="emphasis">Website Design:</span> Agency Dominion</p>
                    </div>
                </div>

                <img className="project__image" alt="Buffo" src={buffo2}></img>
                <img className="project__image" alt="Buffo" src={buffo3}></img>
                <img className="project__image" alt="Buffo" src={buffo4}></img>
                <img className="project__image" alt="Buffo" src={buffo5}></img>
                <img className="project__image" alt="Buffo" src={buffo6}></img>
                <img className="project__image" alt="Buffo" src={buffo7}></img>
            
                <div className="project__nav">
                    <Link to='/defaultWTF' className="project__last">&lt; Last Project: Default.wtf</Link>
                    <Link to='/seakura' className="project__next">Next Project: Seakura &gt;</Link>
                </div>
            </section>
        );
    }
}

export default Buffo;
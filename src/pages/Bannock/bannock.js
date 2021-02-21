import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages.scss';

import bannock1 from '../../assets/images/bannock/bannock-redesign_Page_3.jpg'
import bannock2 from '../../assets/images/bannock/bannock-redesign_Page_2.jpg'
import bannock3 from '../../assets/images/bannock/bannock-redesign_Page_1.jpg'
import bannock4 from '../../assets/images/bannock/bannock-redesign_Page_4.jpg'

class Bannock extends Component {
    render() {
        return (
            <section className="project">
                <h1 className="project__title">bannock</h1>
                <h2 className="project__subtitle">menu / art direction</h2>
                <img className="project__image" alt="Bannock" src={bannock1}></img>
                <div className="project__textBox">
                    <p className="project__text">
                        BANNOCK is a Toronto based restaurant
                        located next to Nathan Phillips Square and
                        owned by Oliver &amp; Bonacini Hospitality. As a
                        central restaurant, we explored ways to ensure
                        Bannock represented all things Canadiana.
                        Breathing life into this branding included
                        introducing new colours, fun and approachable
                        copy, and interactive ways to absorb the brand.

                    </p>
                    <div className="project__textBox">
                        <p className="project__text"><span className="emphasis">Design:</span> Joanna Don Paul</p>
                        <p className="project__text"><span className="emphasis">Art Direction:</span> Allison Woo</p>
                        <p className="project__text"><span className="emphasis">Photography:</span> Assorted</p>
                    </div>
                </div>

                <img className="project__image" alt="Bannock" src={bannock2}></img>
                <img className="project__image" alt="Bannock" src={bannock3}></img>
                <img className="project__image" alt="Bannock" src={bannock4}></img>
            
                <div className="project__nav">
                    <Link to='/seakura' className="project__last">&lt; Last Project: Seakura</Link>
                    <Link to='/arcadian' className="project__next">Next Project: Arcadian &gt;</Link>
                </div>
            </section>
        );
    }
}

export default Bannock;
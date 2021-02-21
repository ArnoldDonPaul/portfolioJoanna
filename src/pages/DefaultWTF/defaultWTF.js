import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages.scss';

import defaultWTF1 from '../../assets/images/defaultWTF/cyborg_web.gif'
import defaultWTF2 from '../../assets/images/defaultWTF/Chrome-Browser.gif'
import defaultWTF3 from '../../assets/images/defaultWTF/IMG_4598.jpg'
import defaultWTF4 from '../../assets/images/defaultWTF/IMG_5546.jpg'
import defaultWTF5 from '../../assets/images/defaultWTF/IMG_5566.jpg'
import defaultWTF6 from '../../assets/images/defaultWTF/IMG_5581.jpg'
import defaultWTF7 from '../../assets/images/defaultWTF/IMG_5589.jpg'
import defaultWTF8 from '../../assets/images/defaultWTF/IMG_5560.jpg'
import defaultWTF9 from '../../assets/images/defaultWTF/IMG_5554.jpg'

class DefaultWTF extends Component {
    render() {
        return (
            <section className="project">
                <h1 className="project__title">default.wtf</h1>
                <h2 className="project__subtitle">web extension / thesis</h2>
                <img className="project__image" alt="DefaultWTF" src={defaultWTF1}></img>
                <div className="project__textBox">
                    <p className="project__text">
                        DEFAULT.WTF is the conceptual thesis from
                        my time at OCAD University. This project
                        was an exploration of accessibility, utopicesque
                        design concepts, and an overall
                        critique of accepted design practices.
                        This project consisted of designing and
                        coding a website, printed-book, and most
                        importantly, a Google Chrome Extension that
                        “default-ifies” websites when activated.
                    </p>
                </div>
                <div className="project__textBox">
                    <p>LINK</p>
                </div>

                <img className="project__image" alt="DefaultWTF" src={defaultWTF2}></img>
                <img className="project__image" alt="DefaultWTF" src={defaultWTF3}></img>
                <div className="multiImageBox">
                    <img className="project__multiImage" alt="DefaultWTF" src={defaultWTF4}></img>
                    <img className="project__multiImage" alt="DefaultWTF" src={defaultWTF5}></img>
                </div>
                <img className="project__image" alt="Babel" src={defaultWTF6}></img>
                <div className="multiImageBox">
                    <img className="project__multiImage" alt="DefaultWTF" src={defaultWTF7}></img>
                    <img className="project__multiImage" alt="DefaultWTF" src={defaultWTF8}></img>
                </div>
                <img className="project__image" alt="DefaultWTF" src={defaultWTF9}></img>
            
                <div className="project__nav">
                    <Link to='/babel' className="project__last">&lt; Last Project: Babel</Link>
                    <Link to='/buffo' className="project__next">Next Project: Buffo &gt;</Link>
                </div>
            </section>
        );
    }
}

export default DefaultWTF;
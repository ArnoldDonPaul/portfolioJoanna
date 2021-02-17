import React, { Component } from 'react';
import '../../styles/pages.scss';

import babel1 from '../../assets/images/babel/babel-businesscard-mock.jpg'
import babel2 from '../../assets/images/babel/LODP0302.jpg'
import babel3 from '../../assets/images/babel/babel-friends-family-9031.jpg'
import babel4 from '../../assets/images/babel/LODP0072.jpg'
import babel5 from '../../assets/images/babel/LODP0079.jpg'
import babel6 from '../../assets/images/babel/babel-tasting-4061.jpg'
import babel7 from '../../assets/images/babel/LODP0063.jpg'
import babel8 from '../../assets/images/babel/babel-friends-family-8543.jpg'

class Babel extends Component {
    render() {
        return (
            <section className="project">
                <h1 className="project__title">babel</h1>
                <h2 className="project__subtitle">branding / art direction</h2>
                <img className="project__image" alt="Babel" src={babel1}></img>
                <div className="project__textBox">
                    <p className="project__text">
                        BABEL is a North York restaurant, developed during my time as Junior Designer at Oliver & Bonacini Hospitality.
                    </p>
                    </div>
                    <div>
                    <p className="project__text">
                        As a new cuisine and new endeavor for our company, I approached the branding from an explorers perspective. Inspired by the natural textures of the Middle East and artisanal qualities of the Mediterranean, I developed the branding and worked as the art director for the photography and website design.
                    </p>
                    <div className="project__textBox">
                        <p className="project__text"><span className="emphasis">Art Direction and Design:</span> Joanna Don Paul</p>
                        <p className="project__text"><span className="emphasis">Photography:</span> Pauline Yu, Cindy La</p>
                        <p className="project__text"><span className="emphasis">Website Design:</span> Agency Dominion</p>
                    </div>
                </div>

                <img className="project__image" alt="Babel" src={babel2}></img>
                <img className="project__image" alt="Babel" src={babel3}></img>
                <div className="multiImageBox">
                    <img className="project__multiImage" alt="Babel" src={babel4}></img>
                    <img className="project__multiImage" alt="Babel" src={babel5}></img>
                </div>
                <img className="project__image" alt="Babel" src={babel6}></img>
                <img className="project__image" alt="Babel" src={babel7}></img>
                <img className="project__image" alt="Babel" src={babel8}></img>

            </section>
        );
    }
}

export default Babel;
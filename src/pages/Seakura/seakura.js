import React, { Component } from 'react';
import '../../styles/pages.scss';

import seakura1 from '../../assets/images/seakura/Seakura-logo.jpg'
import seakura2 from '../../assets/images/seakura/Seakura-logo.jpg'

class Seakura extends Component {
    render() {
        return (
            <section className="project">
                <h1 className="project__title">seakura</h1>
                <h2 className="project__subtitle">branding / social media</h2>
                <img className="project__image" alt="Seakura" src={seakura1}></img>
                <div className="project__textBox">
                    <p className="project__text">
                        SEAKURA is an International Seaweed
                        company that recently expanded to the North
                        American market. In order to attract the the
                        new market audience, they hired Canadians to
                        re-examine their marketing. In that effort, we
                        developed a new brand guideline and social
                        media to introduce it to the Canadian market.
                    </p>
                    <div className="project__textBox">
                        <p className="project__text"><span className="emphasis">Marketing Manager:</span> Jafette Madrigal</p>
                        <p className="project__text"><span className="emphasis">Design:</span> Joanna Don Paul</p>
                    </div>
                </div>
                <img className="project__image" alt="Seakura" src={seakura2}></img>
            </section>
        );
    }
}

export default Seakura;
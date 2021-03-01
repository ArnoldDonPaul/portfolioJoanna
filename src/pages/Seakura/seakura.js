import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages.scss';

import seakura1 from '../../assets/images/seakura/Seakura-SOCIAL_1.jpg'
import seakura2 from '../../assets/images/seakura/seakura_grid.png'

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
            
                <div className="project__nav">
                    <Link to='/buffo' className="project__last">&lt; Last Project: Buffo</Link>
                    <Link to='/bannock' className="project__next">Next Project: Bannock &gt;</Link>
                </div>
            </section>
        );
    }
}

export default Seakura;
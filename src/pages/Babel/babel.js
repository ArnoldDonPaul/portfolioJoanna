import React, { Component } from 'react';
import './babel.scss';

import babel1 from '../../assets/images/babel/p1.jpg'
import babel2 from '../../assets/images/babel/p2.jpg'
import babel3 from '../../assets/images/babel/p3.jpg'
import babel4 from '../../assets/images/babel/p4.jpg'

class ProjectTest extends Component {
    render() {
        return (
            <section className="project">
                <h1 className="project__title">babel</h1>
                <h2 className="project__subtitle">branding / art direction</h2>
                <img className="project__image" alt="Babel" src={babel1}></img>
                <p className="project__text">Welcome to the modern century! Tasked with upgrading our current sales tool from a Word document, we created this million page document that still kinda looks like shit because it’s 8.5x11 inches. I like big butts and I cannot lie, you lorem ipsums can’t deny. </p>
                <img className="project__image" alt="Babel" src={babel2}></img>
                <img className="project__image" alt="Babel" src={babel3}></img>
                <img className="project__image" alt="Babel" src={babel4}></img>
            </section>
        );
    }
}

export default ProjectTest;
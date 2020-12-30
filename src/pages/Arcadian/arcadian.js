import React, { Component } from 'react';
import './arcadian.scss';

import arcadian1 from '../../assets/images/arcadian/p1.jpg'
import arcadian2 from '../../assets/images/arcadian/p2.jpg'
import arcadian3 from '../../assets/images/arcadian/p3.jpg'
import arcadian4 from '../../assets/images/arcadian/p4.jpg'

class ProjectTest extends Component {
    render() {
        return (
            <section className="project">
                <h1 className="project__title">arcadian</h1>
                <h2 className="project__subtitle">menu / art direction</h2>
                <img className="project__image" alt="Arcadian" src={arcadian1}></img>
                <p className="project__text">Welcome to the modern century! Tasked with upgrading our current sales tool from a Word document, we created this million page document that still kinda looks like shit because it’s 8.5x11 inches. I like big butts and I cannot lie, you lorem ipsums can’t deny. </p>
                <img className="project__image" alt="Arcadian" src={arcadian2}></img>
                <img className="project__image" alt="Arcadian" src={arcadian3}></img>
                <img className="project__image" alt="Arcadian" src={arcadian4}></img>
            </section>
        );
    }
}

export default ProjectTest;
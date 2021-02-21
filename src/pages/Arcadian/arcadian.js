import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages.scss';

import arcadian1 from '../../assets/images/arcadian/p1.jpg'
import arcadian2 from '../../assets/images/arcadian/p2.jpg'
import arcadian3 from '../../assets/images/arcadian/p3.jpg'
import arcadian4 from '../../assets/images/arcadian/p4.jpg'

class Arcadian extends Component {
    render() {
        return (
            <section className="project">
                <h1 className="project__title">arcadian</h1>
                <h2 className="project__subtitle">menu / art direction</h2>
                <img className="project__image" alt="Arcadian" src={arcadian1}></img>
                <div className="project__textBox">
                    <p className="project__text">ARCADIAN is a Toronto based event property
                    owned by Oliver &amp; Bonacini Hospitality. This
                    project involved a much larger focus on
                    modernizing and refreshing our
                    company-wide sales tools. Spearheading
                    this move towards the future, I redesigned an
                    84-page document that outlines our menus
                    and offerings for all events at the Arcadian.
                </p>
                    <div className="project__textBox">
                        <p className="project__text"><span className="emphasis">Design:</span> Joanna Don Paul</p>
                        <p className="project__text"><span className="emphasis">Art Direction:</span> Allison Woo</p>
                        <p className="project__text"><span className="emphasis">Photography:</span> Assorted</p>
                    </div>
                </div>

                <img className="project__image" alt="Arcadian" src={arcadian2}></img>
                <img className="project__image" alt="Arcadian" src={arcadian3}></img>
                <img className="project__image" alt="Arcadian" src={arcadian4}></img>

                <div className="project__nav">
                    <Link to='/bannock' className="project__last">&lt; Last Project: Bannock</Link>
                    <Link to='/eNewsletter' className="project__next">Next Project: E-Newsletter &gt;</Link>
                </div>
            </section>
        );
    }
}

export default Arcadian;
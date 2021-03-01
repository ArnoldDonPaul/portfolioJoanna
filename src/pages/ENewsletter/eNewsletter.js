import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages.scss';

import babel2 from '../../assets/images/eNewsletter/Valentines-Eblast.jpg'
import babel3 from '../../assets/images/eNewsletter/Eblast-HolidayParty-October2019Artboard 1.jpg'

class ENewsletter extends Component {
    render() {
        return (
            <section className="project">
                <h1 className="project__title">e-Newsletters</h1>
                <h2 className="project__subtitle">design / typography / copywriting</h2>
                <div className="project__textBox">
                    <p className="project__text">
                        While at Oliver & Bonacini Hospitality,
                        we create predominantly text-based
                        email newsletters - but some occasions
                        call for something special! I consider
                        email newsletters to be one of the best
                        opportunities to create genuine moments of
                        joy between customers and the company,
                        and these are my favourite samples of that!
                    </p>
                </div>
                <div>
                    <p className="project__text">
                        For example: We were struggling to create
                        content for the cheesiest holiday (Valentine’s
                        Day) of all so I said: Embrace the cheese and
                        go all out! A little silliness goes a long way.                    </p>
                </div>

                <img className="project__image" alt="Babel" src={babel2}></img>
                <img className="project__image" alt="Babel" src={babel3}></img>

                <div className="project__nav">
                    <Link to='/littleFoot' className="project__last">&lt; Last Project: Little Foot</Link>
                    <Link to='/defaultWTF' className="project__next">Next Project: Default.wtf &gt;</Link>
                </div>
            </section>
        );
    }
}

export default ENewsletter;
import React, { Component } from 'react';
import '../../styles/pages.scss';

import littleFoot1 from '../../assets/images/littlefoot/LF-Vertical-ANGLED-LEFT.jpg'
import littleFoot2 from '../../assets/images/littlefoot/Little_Foot_1_Page_07.jpg'
import littleFoot3 from '../../assets/images/littlefoot/Little_Foot_1_Page_10.jpg'
import littleFoot4 from '../../assets/images/littlefoot/Little_Foot_1_Page_11.jpg'
import littleFoot5 from '../../assets/images/littlefoot/littlefoot-pixelphone.gif'

class LittleFoot extends Component {
    render() {
        return (
            <section className="project">
                <h1 className="project__title">little foot</h1>
                <h2 className="project__subtitle">UI / UX</h2>
                <img className="project__image" alt="Little Foot" src={littleFoot1}></img>
                <div className="project__textBox">
                    <p className="project__text">
                        LITTLE FOOT is a conceptual project created during my time learning UX Design at Brainstation.                    </p>
                </div>
                <div>
                    <p className="project__text">
                        How might we empower people to take control of their sustainability and encourage them to increase it? I was inspired to explore a way to clear any confusion and make it an exciting pursuit. In an attempt to gamify sustainable living I developed an app that tracks and promotes sustainable practices. This is accomplished through a social aspect that shares progress with contacts as well as providing the user with resources to explore more sustainable options.
                    </p>
                </div>
                <iframe className="prototype" title="Little Foot Prototype" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbmGcV7V0uvboLSFfTDDLPD%2FLittle-Foot%3Fnode-id%3D124%253A734%26scaling%3Dmin-zoom" allowfullscreen></iframe>
                <img className="project__image" alt="Little Foot" src={littleFoot2}></img>
                <img className="project__image" alt="Little Foot" src={littleFoot3}></img>
                <img className="project__image" alt="Little Foot" src={littleFoot4}></img>
                <img className="project__image" alt="Little Foot" src={littleFoot5}></img>
            </section>
        );
    }
}

export default LittleFoot;
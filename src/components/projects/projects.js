import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './projects.scss';

//Pictures
import arcadianHero from '../../assets/images/arcadian/p1.jpg'
import bannockHero from '../../assets/images/bannock/bannock-redesign_Page_1.jpg'
import littlefootHero from '../../assets/images/littlefoot/littlefoot-pixelphone.gif'
import buffoHero from '../../assets/images/buffo/buffo-menu1.jpg'
import canteenHero from '../../assets/images/canteen/canteen-live-eat-1618.jpg'
import defaultwtfHero from '../../assets/images/defaultWTF/Chrome-Browser.gif'
import babelHero from '../../assets/images/babel/babel-businesscard-mock.jpg'
import seakuraHero from '../../assets/images/seakura/Seakura-logo.jpg'
import eNewsletterHero from '../../assets/images/eNewsletter/youvegotmail.jpg'


class Projects extends Component {
    state = {
        canteenZoomed: false,
        littlefootZoomed: false,
        babelZoomed: false,
        defaultwtfZoomed: false,
        buffoZoomed: false,
        seakuraZoomed: false,
        bannockZoomed: false,
        arcadianZoomed: false,
        eNewsletterZoomed: false
    }
    render() {
        return (
            <>

                {/* Canteen */}

                <Link className="link" to='/canteen'>
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">canteen</h1>
                            <h2 className="projectBox__subtitle">typography / art direction</h2>
                            <h3 className="projectBox__link">view project {">"}</h3>
                        </div>
                        <img className="projectBox__image" src={canteenHero} alt="canteen"></img>
                    </div>
                </Link>


                {/* Little Foot */}
                <Link className="link" to='/littleFoot'>
                    <div className="projectBox">
                        <div className="projectBox__textBox">

                            <h1 className="projectBox__title">little foot</h1>
                            <h2 className="projectBox__subtitle">ui / ux</h2>
                            <h3 className="projectBox__link">view project {">"}</h3>

                        </div>
                        <img className="projectBox__image" src={littlefootHero} alt="little foot"></img>
                    </div>
                </Link>

                {/* Babel */}
                <Link className="link" to='/babel'>
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">babel</h1>
                            <h2 className="projectBox__subtitle">branding / art direction</h2>
                            <h3 className="projectBox__link">view project {">"}</h3>
                        </div>
                        <img className="projectBox__image" src={babelHero} alt="babel"></img>
                    </div>
                </Link>


                {/* Default.wtf */}
                <Link className="link" to='/defaultWTF'>
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">default.<span className="projectBox__textBox--specialCase">wtf</span></h1>
                            <h2 className="projectBox__subtitle">web extension / thesis</h2>
                            <h3 className="projectBox__link">view project {">"}</h3>
                        </div>
                        <img className="projectBox__image" src={defaultwtfHero} alt="default.wtf" onClick={() => this.setState({ defaultwtfZoomed: true })}></img>
                    </div>
                </Link>

                {/* Buffo */}

                <Link className="link" to='/buffo'>
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">buffo</h1>
                            <h2 className="projectBox__subtitle">branding / typography</h2>
                            <h3 className="projectBox__link">view project {">"}</h3>
                        </div>
                        <img className="projectBox__image" src={buffoHero} alt="buffo" onClick={() => this.setState({ buffoZoomed: true })}></img>
                    </div>
                </Link>

                {/* Seakura */}

                <Link className="link" to='/seakura'>
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">seakura</h1>
                            <h2 className="projectBox__subtitle">branding / social media</h2>
                            <h3 className="projectBox__link">view project {">"}</h3>
                        </div>
                        <img className="projectBox__image" src={seakuraHero} alt="seakura" onClick={() => this.setState({ seakuraZoomed: true })}></img>
                    </div>
                </Link>


                {/* Bannock */}

                <Link className="link" to='/bannock'>
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">bannock</h1>
                            <h2 className="projectBox__subtitle">menu / art direction</h2>
                            <h3 className="projectBox__link">view project {">"}</h3>
                        </div>
                        <img className="projectBox__image" src={bannockHero} alt="bannock" onClick={() => this.setState({ bannockZoomed: true })}></img>
                    </div>
                </Link>

                {/* Arcadian */}

                <Link className="link" to='/arcadian'>
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">arcadian</h1>
                            <h2 className="projectBox__subtitle">menu / typography</h2>
                            <h3 className="projectBox__link">view project {">"}</h3>
                        </div>
                        <img className="projectBox__image" src={arcadianHero} alt="arcadian" onClick={() => this.setState({ arcadianZoomed: true })}></img>
                    </div>
                </Link>

                {/* E-Newsletters */}

                <Link className="link" to='/eNewsletter'>
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">e-Newsletter</h1>
                            <h2 className="projectBox__subtitle">design / typography / copywriting</h2>
                            <h3 className="projectBox__link">view project {">"}</h3>
                        </div>
                        <img className="projectBox__image" src={eNewsletterHero} alt="e-newsletters" onClick={() => this.setState({ eNewsletterZoomed: true })}></img>
                    </div>
                </Link>

            </>
        );
    }
}

export default Projects;
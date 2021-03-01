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
                {
                    this.state.canteenZoomed === false && (
                        <div className="projectBox">
                            <div className="projectBox__textBox">
                                <Link className="link" to='/canteen'>
                                    <h1 className="projectBox__title">canteen</h1>
                                    <h2 className="projectBox__subtitle">typography / art direction</h2>
                                    <h3 className="projectBox__link">view project {">"}</h3>
                                </Link>
                            </div>
                            <img className="projectBox__image" src={canteenHero} alt="canteen" onClick={() => this.setState({ canteenZoomed: true })}></img>
                        </div>
                    )
                }
                {
                    this.state.canteenZoomed === true && (
                        <>
                            <div className="projectBox__textBox--mobile">
                                <div className="projectBox__textBox">
                                    <Link className="link" to='/canteen'>
                                        <h1 className="projectBox__title">canteen</h1>
                                        <h2 className="projectBox__subtitle">typography / art direction</h2>
                                        <h3 className="projectBox__link">view project {">"}</h3>
                                    </Link>
                                </div>
                            </div>
                            <img className="projectBox__image--zoomed" src={canteenHero} alt="canteen" onClick={() => this.setState({ canteenZoomed: false })}></img>
                        </>
                    )
                }


                {/* Little Foot */}
                {
                    this.state.littlefootZoomed === false && (
                        <div className="projectBox">
                            <div className="projectBox__textBox">
                                <Link className="link" to='/littleFoot'>
                                    <h1 className="projectBox__title">little foot</h1>
                                    <h2 className="projectBox__subtitle">ui / ux</h2>
                                    <h3 className="projectBox__link">view project {">"}</h3>
                                </Link>
                            </div>
                            <img className="projectBox__image" src={littlefootHero} alt="little foot" onClick={() => this.setState({ littlefootZoomed: true })}></img>
                        </div>
                    )
                }
                {
                    this.state.littlefootZoomed === true && (
                        <>
                            <div className="projectBox__textBox--mobile">
                                <div className="projectBox__textBox">
                                    <Link className="link" to='/littleFoot'>
                                        <h1 className="projectBox__title">little foot</h1>
                                        <h2 className="projectBox__subtitle">ui / ux</h2>
                                        <h3 className="projectBox__link">view project {">"}</h3>
                                    </Link>
                                </div>
                            </div>
                            <img className="projectBox__image--zoomed" src={littlefootHero} alt="little foot" onClick={() => this.setState({ littlefootZoomed: false })}></img>
                        </>
                    )
                }

                {/* Babel */}
                {
                    this.state.babelZoomed === false && (
                        <div className="projectBox">
                            <div className="projectBox__textBox">
                                <Link className="link" to='/babel'>
                                    <h1 className="projectBox__title">babel</h1>
                                    <h2 className="projectBox__subtitle">branding / art direction</h2>
                                    <h3 className="projectBox__link">view project {">"}</h3>
                                </Link>
                            </div>
                            <img className="projectBox__image" src={babelHero} alt="babel" onClick={() => this.setState({ babelZoomed: true })}></img>
                        </div>
                    )
                }
                {
                    this.state.babelZoomed === true && (
                        <>
                            <div className="projectBox__textBox--mobile">
                                <div className="projectBox__textBox">
                                    <Link className="link" to='/babel'>
                                        <h1 className="projectBox__title">babel</h1>
                                        <h2 className="projectBox__subtitle">branding / art direction</h2>
                                        <h3 className="projectBox__link">view project {">"}</h3>
                                    </Link>
                                </div>
                            </div>
                            <img className="projectBox__image--zoomed" src={babelHero} alt="babel" onClick={() => this.setState({ babelZoomed: false })}></img>
                        </>
                    )
                }

                {/* Default.wtf */}
                {
                    this.state.defaultwtfZoomed === false && (
                        <div className="projectBox">
                            <div className="projectBox__textBox">
                                <Link className="link" to='/defaultWTF'>
                                    <h1 className="projectBox__title">default.<span className="projectBox__textBox--specialCase">wtf</span></h1>
                                    <h2 className="projectBox__subtitle">web extension / thesis</h2>
                                    <h3 className="projectBox__link">view project {">"}</h3>
                                </Link>
                            </div>
                            <img className="projectBox__image" src={defaultwtfHero} alt="default.wtf" onClick={() => this.setState({ defaultwtfZoomed: true })}></img>
                        </div>
                    )
                }
                {
                    this.state.defaultwtfZoomed === true && (
                        <>
                            <div className="projectBox__textBox--mobile">
                                <div className="projectBox__textBox">
                                    <Link className="link" to='/defaultWTF'>
                                        <h1 className="projectBox__title">default.<span className="projectBox__textBox--specialCase">wtf</span></h1>
                                        <h2 className="projectBox__subtitle">web extension / thesis</h2>
                                        <h3 className="projectBox__link">view project {">"}</h3>
                                    </Link>
                                </div>
                            </div>
                            <img className="projectBox__image--zoomed" src={defaultwtfHero} alt="default.wtf" onClick={() => this.setState({ defaultwtfZoomed: false })}></img>
                        </>
                    )
                }

                {/* Buffo */}
                {
                    this.state.buffoZoomed === false && (
                        <div className="projectBox">
                            <div className="projectBox__textBox">
                                <Link className="link" to='/buffo'>
                                    <h1 className="projectBox__title">buffo</h1>
                                    <h2 className="projectBox__subtitle">branding / typography</h2>
                                    <h3 className="projectBox__link">view project {">"}</h3>
                                </Link>
                            </div>
                            <img className="projectBox__image" src={buffoHero} alt="buffo" onClick={() => this.setState({ buffoZoomed: true })}></img>
                        </div>
                    )
                }
                {
                    this.state.buffoZoomed === true && (
                        <>
                            <div className="projectBox__textBox--mobile">
                                <div className="projectBox__textBox">
                                    <Link className="link" to='/buffo'>
                                        <h1 className="projectBox__title">buffo</h1>
                                        <h2 className="projectBox__subtitle">branding / typography</h2>
                                        <h3 className="projectBox__link">view project {">"}</h3>
                                    </Link>
                                </div>
                            </div>
                            <img className="projectBox__image--zoomed" src={buffoHero} alt="buffo" onClick={() => this.setState({ buffoZoomed: false })}></img>
                        </>
                    )
                }

                {/* Seakura */}
                {
                    this.state.seakuraZoomed === false && (
                        <div className="projectBox">
                            <div className="projectBox__textBox">
                                <Link className="link" to='/seakura'>
                                    <h1 className="projectBox__title">seakura</h1>
                                    <h2 className="projectBox__subtitle">branding / social media</h2>
                                    <h3 className="projectBox__link">view project {">"}</h3>
                                </Link>
                            </div>
                            <img className="projectBox__image" src={seakuraHero} alt="seakura" onClick={() => this.setState({ seakuraZoomed: true })}></img>
                        </div>
                    )
                }
                {
                    this.state.seakuraZoomed === true && (
                        <>
                            <div className="projectBox__textBox--mobile">
                                <div className="projectBox__textBox">
                                    <Link className="link" to='/seakura'>
                                        <h1 className="projectBox__title">seakura</h1>
                                        <h2 className="projectBox__subtitle">branding / social media</h2>
                                        <h3 className="projectBox__link">view project {">"}</h3>
                                    </Link>
                                </div>
                            </div>
                            <img className="projectBox__image--zoomed" src={seakuraHero} alt="seakura" onClick={() => this.setState({ seakuraZoomed: false })}></img>
                        </>
                    )
                }


                {/* Bannock */}
                {
                    this.state.bannockZoomed === false && (
                        <div className="projectBox">
                            <div className="projectBox__textBox">
                                <Link className="link" to='/bannock'>
                                    <h1 className="projectBox__title">bannock</h1>
                                    <h2 className="projectBox__subtitle">menu / art direction</h2>
                                    <h3 className="projectBox__link">view project {">"}</h3>
                                </Link>
                            </div>
                            <img className="projectBox__image" src={bannockHero} alt="bannock" onClick={() => this.setState({ bannockZoomed: true })}></img>
                        </div>
                    )
                }
                {
                    this.state.bannockZoomed === true && (
                        <>
                            <div className="projectBox__textBox--mobile">
                                <div className="projectBox__textBox">
                                    <Link className="link" to='/bannock'>
                                        <h1 className="projectBox__title">bannock</h1>
                                        <h2 className="projectBox__subtitle">menu / art direction</h2>
                                        <h3 className="projectBox__link">view project {">"}</h3>
                                    </Link>
                                </div>
                            </div>
                            <img className="projectBox__image--zoomed" src={bannockHero} alt="bannock" onClick={() => this.setState({ bannockZoomed: false })}></img>
                        </>
                    )
                }

                {/* Arcadian */}
                {
                    this.state.arcadianZoomed === false && (
                        <div className="projectBox">
                            <div className="projectBox__textBox">
                                <Link className="link" to='/arcadian'>
                                    <h1 className="projectBox__title">arcadian</h1>
                                    <h2 className="projectBox__subtitle">menu / typography</h2>
                                    <h3 className="projectBox__link">view project {">"}</h3>
                                </Link>
                            </div>
                            <img className="projectBox__image" src={arcadianHero} alt="arcadian" onClick={() => this.setState({ arcadianZoomed: true })}></img>
                        </div>
                    )
                }
                {
                    this.state.arcadianZoomed === true && (
                        <>
                            <div className="projectBox__textBox--mobile">
                                <div className="projectBox__textBox">
                                    <Link className="link" to='/arcadian'>
                                        <h1 className="projectBox__title">arcadian</h1>
                                        <h2 className="projectBox__subtitle">menu / typography</h2>
                                        <h3 className="projectBox__link">view project {">"}</h3>
                                    </Link>
                                </div>
                            </div>
                            <img className="projectBox__image--zoomed" src={arcadianHero} alt="arcadian" onClick={() => this.setState({ arcadianZoomed: false })}></img>
                        </>
                    )
                }

                {/* E-Newsletters */}
                {
                    this.state.eNewsletterZoomed === false && (
                        <div className="projectBox">
                            <div className="projectBox__textBox">
                                <Link className="link" to='/eNewsletter'>
                                    <h1 className="projectBox__title">e-Newsletter</h1>
                                    <h2 className="projectBox__subtitle">design / typography / copywriting</h2>
                                    <h3 className="projectBox__link">view project {">"}</h3>
                                </Link>
                            </div>
                            <img className="projectBox__image" src={eNewsletterHero} alt="e-newsletters" onClick={() => this.setState({ eNewsletterZoomed: true })}></img>
                        </div>
                    )
                }
                {
                    this.state.eNewsletterZoomed === true && (
                        <>
                            <div className="projectBox__textBox--mobile">
                                <div className="projectBox__textBox">
                                    <Link className="link" to='/eNewsletter'>
                                        <h1 className="projectBox__title">e-Newsletter</h1>
                                        <h2 className="projectBox__subtitle">design / typography / copywriting</h2>
                                        <h3 className="projectBox__link">view project {">"}</h3>
                                    </Link>
                                </div>
                            </div>
                            <img className="projectBox__image--zoomed" src={eNewsletterHero} alt="e-newsletters" onClick={() => this.setState({ eNewsletterZoomed: false })}></img>
                        </>
                    )
                }
            </>
        );
    }
}

export default Projects;
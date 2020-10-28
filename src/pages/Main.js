import React, { Component } from 'react';
import '../styles/styles.css';

//Pictures
import arcadianHero from '../assets/images/arcadian/p1.jpg'
import bannockHero from '../assets/images/bannock/bannock-redesign_Page_1.jpg'
import littlefootHero from '../assets/images/littlefoot/littlefoot-pixelphone.gif'
import buffoHero from '../assets/images/buffo/buffo-menu1.jpg'
import canteenHero from '../assets/images/canteen/canteen-live-eat-1618.jpg'
import defaultwtfHero from '../assets/images/default.wtf/Chrome-Browser.gif'
import babelHero from '../assets/images/babel/babel-businesscard-mock.jpg'
import seakuraHero from '../assets/images/seakura/Seakura-logo.jpg'

class Main extends Component {
    state = {
        infoExpanded: false,

        canteenZoomed: false,
        littlefootZoomed: false,
        babelZoomed: false,
        defaultwtfZoomed: false,
        buffoZoomed: false,
        seakuraZoomed: false,
        bannockZoomed: false,
        arcadianZoomed: false
    }
    render() {
        const openInNewTab = (url) => {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null
        }
        return (
            <>
                <nav className="navBar">
                    <div className="navBar__infoInitial">
                        {
                            this.state.infoExpanded === false && (
                                <>
                                    <a className="logoLink" href="#top"><h1 className="navBar__header" onClick={() => this.setState({ infoExpanded: true, canteenZoomed: false, littlefootZoomed: false, babelZoomed: false, defaultwtfZoomed: false, buffoZoomed: false, seakuraZoomed: false, bannockZoomed: false, arcadianZoomed: false })}>joanna.to</h1></a>
                                    <h2 className="navBar__info" onClick={() => this.setState({ infoExpanded: true })}>information +</h2>
                                </>
                            )
                        }
                    </div>
                    {
                        this.state.infoExpanded === true && (
                            <>
                                <div className="navBar__infoInitial">
                                    <a className="logoLink" href="#top"><h1 className="navBar__header">joanna.to</h1></a>
                                    <h2 className="navBar__info" onClick={() => this.setState({ infoExpanded: false })}>information −</h2>
                                </div>
                                <div className="navBar__dropDown">
                                    <p className="navBar__infoExpanded">
                                        Hi, my name is Joanna and I’m a Toronto-based graphic designer.
                                        My work consists of branding, editorial, art direction, print, digital, user experience, research, copywriting, editing;
                                        I’m a generalist unicorn in pursuit of the big picture and new ventures.
                                    </p>
                                    <div className="navBar__contactBox">
                                        <div className="navBar__contactBox--mobile">
                                            <p className="textBold">Contact:</p>
                                            <a className="contactLink" href="mailto:hello@joanna.to">hello@joanna.to</a>
                                            <p>1 647 961 0759</p>
                                            <p className="contactLink" onClick={() => { openInNewTab('https://www.linkedin.com/in/joannadonpaul/') }}>LinkedIn</p>
                                            <p className="contactLink" onClick={() => { openInNewTab('https://www.instagram.com/anotherjoanna/') }}>Instagram</p>
                                        </div>
                                        <div className="navBar__contactBox--tabletDesktop">
                                            <p><span className="textBold">Contact:</span> <a className="contactLink" href="mailto:hello@joanna.to">hello@joanna.to</a> / 1 647 961 0759 / <span className="contactLink" onClick={() => { openInNewTab('https://www.linkedin.com/in/joannadonpaul/') }}>LinkedIn</span> / <span className="contactLink" onClick={() => { openInNewTab('https://www.instagram.com/anotherjoanna/') }}>Instagram</span></p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </nav>

                <section>

                    {/* Canteen */}
                    {
                        this.state.canteenZoomed === false && (
                            <div className="projectBox">
                                <div className="projectBox__textBox">
                                    <h1 className="projectBox__title">canteen</h1>
                                    <h2 className="projectBox__subtitle">typography / art direction</h2>
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
                                        <h1 className="projectBox__title">canteen</h1>
                                        <h2 className="projectBox__subtitle">typography / art direction</h2>
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
                                    <h1 className="projectBox__title">little foot</h1>
                                    <h2 className="projectBox__subtitle">ui / ux</h2>
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
                                        <h1 className="projectBox__title">little foot</h1>
                                        <h2 className="projectBox__subtitle">ui / ux</h2>
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
                                    <h1 className="projectBox__title">babel</h1>
                                    <h2 className="projectBox__subtitle">branding / art direction</h2>
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
                                        <h1 className="projectBox__title">babel</h1>
                                        <h2 className="projectBox__subtitle">branding / art direction</h2>
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
                                    <h1 className="projectBox__title">default.<span className="projectBox__textBox--specialCase">wtf</span></h1>
                                    <h2 className="projectBox__subtitle">web extension / thesis</h2>
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
                                        <h1 className="projectBox__title">default.<span className="projectBox__textBox--specialCase">wtf</span></h1>
                                        <h2 className="projectBox__subtitle">web extension / thesis</h2>
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
                                    <h1 className="projectBox__title">buffo</h1>
                                    <h2 className="projectBox__subtitle">branding / typography</h2>
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
                                        <h1 className="projectBox__title">buffo</h1>
                                        <h2 className="projectBox__subtitle">branding / typography</h2>
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
                                    <h1 className="projectBox__title">seakura</h1>
                                    <h2 className="projectBox__subtitle">branding / social media</h2>
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
                                        <h1 className="projectBox__title">seakura</h1>
                                        <h2 className="projectBox__subtitle">branding / social media</h2>
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
                                    <h1 className="projectBox__title">bannock</h1>
                                    <h2 className="projectBox__subtitle">menu / art direction</h2>
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
                                        <h1 className="projectBox__title">bannock</h1>
                                        <h2 className="projectBox__subtitle">menu / art direction</h2>
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
                                    <h1 className="projectBox__title">arcadian</h1>
                                    <h2 className="projectBox__subtitle">menu / typography</h2>
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
                                        <h1 className="projectBox__title">arcadian</h1>
                                        <h2 className="projectBox__subtitle">menu / typography</h2>
                                    </div>
                                </div>
                                <img className="projectBox__image--zoomed" src={arcadianHero} alt="arcadian" onClick={() => this.setState({ arcadianZoomed: false })}></img>
                            </>
                        )
                    }
                </section>
                <footer>
                    <p className="creator" onClick={() => { openInNewTab('https://www.donpaul.dev') }}>This website was made with <span role="img" aria-label="love">❤️</span> by Arnold Don Paul</p>
                </footer>
            </>
        );
    }
}

export default Main;
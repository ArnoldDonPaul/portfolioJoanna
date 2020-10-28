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

class Main extends Component {
    state = {
        infoExpanded: false
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
                                    <a className="logoLink" href="#top"><h1 className="navBar__header" onClick={() => this.setState({ infoExpanded: true })}>joanna.to</h1></a>
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
                                            <p className="contactLink" onClick={() => { openInNewTab('https://www.linkedin.com/in/joannagutowska/') }}>LinkedIn</p>
                                            <p className="contactLink" onClick={() => { openInNewTab('https://www.linkedin.com/in/joannagutowska/') }}>Instagram</p>
                                        </div>
                                        <div className="navBar__contactBox--tabletDesktop">
                                            <p><span className="textBold">Contact:</span> <a className="contactLink" href="mailto:hello@joanna.to">hello@joanna.to</a> / 1 647 961 0759 / <span className="contactLink" onClick={() => { openInNewTab('https://www.linkedin.com/in/joannagutowska/') }}>LinkedIn</span> / <span className="contactLink" onClick={() => { openInNewTab('https://www.linkedin.com/in/joannagutowska/') }}>Instagram</span></p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </nav>

                <section>

                    {/* Arcadian */}
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">arcadian</h1>
                            <h2 className="projectBox__subtitle">menu / art direction</h2>
                        </div>
                        <img className="projectBox__image" src={arcadianHero} alt="arcadian"></img>
                    </div>

                    {/* Bannock */}
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">bannock</h1>
                            <h2 className="projectBox__subtitle">menu / art direction</h2>
                        </div>
                        <img className="projectBox__image" src={bannockHero} alt="bannock"></img>
                    </div>

                    {/* Little Foot */}
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">little foot</h1>
                            <h2 className="projectBox__subtitle">user experience & interface</h2>
                        </div>
                        <img className="projectBox__image" src={littlefootHero} alt="little foot"></img>
                    </div>

                    {/* Buffo */}
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">buffo</h1>
                            <h2 className="projectBox__subtitle">menu / typography</h2>
                        </div>
                        <img className="projectBox__image" src={buffoHero} alt="buffo"></img>
                    </div>

                    {/* Canteen */}
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">canteen</h1>
                            <h2 className="projectBox__subtitle">menu / typography / art direction</h2>
                        </div>
                        <img className="projectBox__image" src={canteenHero} alt="canteen"></img>
                    </div>

                    {/* Default.wtf */}
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">default.wtf</h1>
                            <h2 className="projectBox__subtitle">research / web extension / thesis</h2>
                        </div>
                        <img className="projectBox__image" src={defaultwtfHero} alt="default.wtf"></img>
                    </div>

                    {/* Babel */}
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">babel</h1>
                            <h2 className="projectBox__subtitle">menu / typography / art direction</h2>
                        </div>
                        <img className="projectBox__image" src={babelHero} alt="babel"></img>
                    </div>

                </section>
            </>
        );
    }
}

export default Main;
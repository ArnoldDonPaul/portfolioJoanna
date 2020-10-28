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
        return (
            <>
                <nav className="navBar">
                    <div className="navBar__infoInitial">
                        {
                            this.state.infoExpanded === false && (
                                <>
                                    <h1 className="navBar__header">joanna.to</h1>
                                    <h2 className="navBar__info" onClick={() => this.setState({ infoExpanded: true })}>information +</h2>
                                </>
                            )
                        }
                    </div>
                    {
                        this.state.infoExpanded === true && (
                            <>
                                <div className="navBar__infoInitial">
                                    <h1 className="navBar__header">joanna.to</h1>
                                    <h2 className="navBar__info" onClick={() => this.setState({ infoExpanded: false })}>information −</h2>
                                </div>
                                <div className="navBar__dropDown">
                                    <p className="navBar__infoExpanded">i'm a graphic designer based in toronto, canada.</p>
                                    <p className="navBar__infoExpanded">* i’m currently an intermediate designer at oliver & bonacini hospitality</p>
                                    <div className="contactBox">
                                        <div className="contactBox__direct">
                                            <p>hello@joanna.to</p>
                                            <p>1 647 961 0759</p>
                                        </div>
                                        <div className="contactBox__social">
                                            <p>linkedin</p>
                                            <p>instagram</p>
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
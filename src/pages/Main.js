import React, { Component } from 'react';
import '../styles/styles.css';
import nicCage from '../assets/images/conair.jpg'

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
                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">arcadian</h1>
                            <h2 className="projectBox__subtitle">menu / art direction</h2>
                        </div>
                        <img className="projectBox__image" src={nicCage} alt="arcadian"></img>
                    </div>

                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">bannock</h1>
                            <h2 className="projectBox__subtitle">menu / art direction</h2>
                        </div>
                        <img className="projectBox__image" src={nicCage} alt="bannock"></img>
                    </div>

                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">little foot</h1>
                            <h2 className="projectBox__subtitle">user experience & interface</h2>
                        </div>
                        <img className="projectBox__image" src={nicCage} alt="little foot"></img>
                    </div>

                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">buffo</h1>
                            <h2 className="projectBox__subtitle">menu / typography</h2>
                        </div>
                        <img className="projectBox__image" src={nicCage} alt="buffo"></img>
                    </div>

                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">canteen</h1>
                            <h2 className="projectBox__subtitle">menu / typography / art direction</h2>
                        </div>
                        <img className="projectBox__image" src={nicCage} alt="canteen"></img>
                    </div>

                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">default.wtf</h1>
                            <h2 className="projectBox__subtitle">research / web extension / thesis</h2>
                        </div>
                        <img className="projectBox__image" src={nicCage} alt="default.wtf"></img>
                    </div>

                    <div className="projectBox">
                        <div className="projectBox__textBox">
                            <h1 className="projectBox__title">babel</h1>
                            <h2 className="projectBox__subtitle">menu / typography / art direction</h2>
                        </div>
                        <img className="projectBox__image" src={nicCage} alt="babel"></img>
                    </div>

                </section>
            </>
        );
    }
}

export default Main;
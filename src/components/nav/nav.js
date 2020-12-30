import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

class Nav extends Component {
    state = {
        infoExpanded: false,
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
                                    <Link className="logoLink" href="#top" to='/'><h1 className="navBar__header" onClick={() => this.setState({ infoExpanded: true, canteenZoomed: false, littlefootZoomed: false, babelZoomed: false, defaultwtfZoomed: false, buffoZoomed: false, seakuraZoomed: false, bannockZoomed: false, arcadianZoomed: false })}>joanna.to</h1></Link>
                                    <h2 className="navBar__info" onClick={() => this.setState({ infoExpanded: true })}>information +</h2>
                                </>
                            )
                        }
                    </div>
                    {
                        this.state.infoExpanded === true && (
                            <>
                                <div className="navBar__infoInitial">
                                    <Link className="logoLink" to='/' href="#top"><h1 className="navBar__header">joanna.to</h1></Link>
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
            </>
        );
    }
}

export default Nav;
import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
    render() {
        const openInNewTab = (url) => {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null
        }
        return (
            <>
                <footer>
                    <p className="creator" onClick={() => { openInNewTab('https://www.donpaul.dev') }}>This website was made with <span role="img" aria-label="love">❤️</span> by Arnold Don Paul</p>
                </footer>
            </>
        );
    }
}

export default Footer;
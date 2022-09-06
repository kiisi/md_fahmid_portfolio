import React from 'react'
import './Footer.css'
import facebook from '../Images/facebook.svg'
import twitter from '../Images/twitter.svg'
import insta from '../Images/insta.svg'
const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className="max-wrapper">
            <div className="footer">
                <div className="footer-social">
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={insta} alt="insta" />
                </div>
                <div className="footer-copyright">Md Fahmid &copy; {year}, All Rights Reserved</div>
            </div>
        </div>
    )
}
/*
<div className="footer-main">
                    <div className="footer-main-header">
                        <h2><span>Fast</span>Food</h2>
                    </div>
                    <div className="footer-main-social">
                        <div className="footer-main-social-links">
                            <img src={facebook} alt="facebook" />
                            <img src={twitter} alt="twitter" />
                            <img src={insta} alt="insta" />
                        </div>
                    </div>
                </div>
                <div className="footer-subscribe">
                    <div className="footer-subscribe-header">
                        <h1>Get in Touch</h1>
                    </div>
                    <div className="footer-subscribe-children">
                        <p>Schedule a discovery call to discuss a content strategy partnership by sending us your mail.</p>
                    </div>
                    <div className="footer-subscribe-input">
                        <input type="text" placeholder="Enter Email" />
                        <div className="footer-subscribe-input-send">
                            <img src='' alt="send" />
                        </div>
                    </div>
                </div>
*/

export default Footer
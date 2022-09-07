import React from 'react'
import './Footer.css'
const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className="max-wrapper">
            <div className="footer">
                <div className="footer-social">
                    929 525 7669
                </div>
                <div className="footer-copyright">Fahmid &copy; {year}, All Rights Reserved</div>
            </div>
        </div>
    )
}


export default Footer
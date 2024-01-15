import React from "react"
import facebookIcon from "../images/facebook icon.png"
import twitterIcon from "../images/twitter icon.png"
import instagramIcon from "../images/instagram icon.png"
import youtubeIcon from "../images/youtube icon.png"

function Footer() {

    return (
        <div className="footer">
            <div className="footerUpper">
                <img src={facebookIcon}></img>
                <img src={twitterIcon}></img>
                <img src={instagramIcon}></img>
                <img src={youtubeIcon}></img>
            </div>
            <div className="footerLower">
                <div>
                    <div className="footerLink">Audio Description</div>
                    <div className="footerLink">Investo Relations</div>
                </div>
                <div>
                    <div className="footerLink">Help Center</div>
                    <div className="footerLink">Legal Notices</div>
                </div>
                <div>
                    <div className="footerLink">Jobs</div>
                    <div className="footerLink">Cookies Preferences</div>
                </div>
                <div>
                    <div className="footerLink">Gift Cards</div>
                    <div className="footerLink">Terms of Use</div>
                </div>
                <div>
                    <div className="footerLink">Media Center</div>
                    <div className="footerLink">Corporate Information</div>
                </div>
                <div>
                    <div className="footerLink">Privacy</div>
                    <div className="footerLink">Contact Us</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
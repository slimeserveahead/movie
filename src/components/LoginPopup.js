import igIcon from "../images/popup ig.png"
import fbIcon from "../images/popup fb.png"
import googleIcon from "../images/popup google.png"
import React from "react"

function LoginPopup(props) {
    const [showBackground, setShowBackground] = React.useState(false)
    const [showPopup, setShowPopup] = React.useState(false)
    const [isClickable, setIsClickable] = React.useState(true)

    React.useEffect(() => {
        if (props.isShowingLogin) {
            setIsClickable(false)
            setShowBackground(true)
            setTimeout(() => {
                setShowPopup(true)
            }, 400);
            setTimeout(() => {
                setIsClickable(true)
            }, 600);
        }
    }, [props.isShowingLogin])

    // FIX MULTIPLE CLICKING EVENT
    function closePopup() {
        if (isClickable) {
            setShowPopup(false)
            setTimeout(() => {
                setShowBackground(false)
            }, 200);
            setTimeout(() => {
                props.setIsShowingLogin(false)
            }, 610);
        }
    }

    return  (
        <div className={`loginPopup ${showBackground ? "height100" : ""}`}>
            <div className="loginContainer">
                <div onClick={closePopup} className="backgroundOverlay"></div>
                <div className={`popUp ${showPopup ? "opacityOne" : ""}`}>
                    <div className="popUpTitle">LOG IN</div>
                    <div className="popUpSubtitle">Login to your account</div>
                    <input className="popupInput" type="email" placeholder="Email Address"></input>
                    <input className="popupInput" type="password" placeholder="Password"></input>
                    <div className="lowerPopup">
                        <div className="popupButton">Login</div>
                        <div className="forgotPassword">Forgot password ?</div>
                        <div className="popupSocials">
                            <img src={igIcon}></img>
                            <img src={fbIcon}></img>
                            <img src={googleIcon}></img>
                        </div>
                    </div>
                </div> 
            </div>
            
        </div>
    )
}

export default LoginPopup
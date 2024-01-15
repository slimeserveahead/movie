function Header(props) {
    return (
        <div className="header">
            <div className="headerLeft">
                <input placeholder="Quick Search"></input>
            </div>
            <div className="headerButtons">
                <div className="headerButton">HOME</div>
                <div className="headerButton">4K</div>
                <div className="headerButton">TRENDING</div>
                <div className="headerButton">BROWSE MOVIES</div>
                <div className="headerButton">MY ACCOUNT</div>
            </div>
            <div className="headerRight">
                <div className="loginButton" onClick={() => props.setIsShowingLogin(true)}>Log in</div>
                <div>|</div>
                <div className="registerButton" onClick={() => props.setIsShowingLogin(true)}>Register</div>
            </div>
        </div>
    )
}

export default Header
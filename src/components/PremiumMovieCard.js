import starIcon from "../images/star icon.png"

function PremiumMovieCard(props) {
    return (
        <div className="premiumMovieCard">
            <img className="premiumMovieImg" src={props.img}></img>
            <div className="premiumMovieTitle">LOREM IPSUM</div>
            <div className="starIconPremiumContainer">
                <img className={`starIconPremium ${props.rating > 0.5 ? "starIconActive" : ""}`} src={starIcon}></img>
                <img className={`starIconPremium ${props.rating > 1.5 ? "starIconActive" : ""}`} src={starIcon}></img>
                <img className={`starIconPremium ${props.rating > 2.5 ? "starIconActive" : ""}`} src={starIcon}></img>
                <img className={`starIconPremium ${props.rating > 3.5 ? "starIconActive" : ""}`} src={starIcon}></img>
                <img className={`starIconPremium ${props.rating > 4.5 ? "starIconActive" : ""}`} src={starIcon}></img>
                21.63K
            </div>
        </div>
    )
}

export default PremiumMovieCard
import starIcon from "../images/star icon.png"

function UpcomingMovieCard(props) {
    return (
        <div className="upcomingMovieCard">
            <div className="upcomingMovieImg">
                <img src={props.img}></img>
            </div>
            <div className="upcomingMovieDetails">
                <div className="upcomingMovieTitle">Lorem Ipsum</div>
                <div className="upcomingMovieDescription">is simply dummy text of the printing</div>
                <div className="upcomingMovieRating">
                    <img className={`starIconUpcoming ${props.rating >= 0.5 ? "starIconActive": ""}`} src={starIcon}></img>
                    <img className={`starIconUpcoming ${props.rating >= 1.5 ? "starIconActive": ""}`}src={starIcon}></img>
                    <img className={`starIconUpcoming ${props.rating >= 2.5 ? "starIconActive": ""}`}src={starIcon}></img>
                    <img className={`starIconUpcoming ${props.rating >= 3.5 ? "starIconActive": ""}`}src={starIcon}></img>
                    <img className={`starIconUpcoming ${props.rating >= 4.5 ? "starIconActive": ""}`} src={starIcon}></img>
                </div>
            </div>
        </div>
    )
}

export default UpcomingMovieCard
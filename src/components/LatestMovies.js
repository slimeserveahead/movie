import latestMovie1 from "../images/latest movie 1.png"
import latestMovie2 from "../images/latest movie 2.png"
import latestMovie3 from "../images/latest movie 3.png"
import latestMovie4 from "../images/latest movie 4.png"
import latestMovie5 from "../images/latest movie 5.png"
import latestMovie6 from "../images/latest movie 6.png"
import arrowDown from "../images/arrow  down.png"
import LatestMovieCard from "./LatestMovieCard"

function LatestMovies() {
    return (
        <div className="latestMovies">
            <div className="latestMoviesTitle">
                <div>Latest Movies</div>
                <div className="moreLatestMovies">More <img src={arrowDown}></img></div>
            </div>
            <div className="latestMoviesContainer">
                <LatestMovieCard 
                    img = {latestMovie1}
                />
                <LatestMovieCard 
                    img = {latestMovie2}
                />
                <LatestMovieCard 
                    img = {latestMovie3}
                />
                <LatestMovieCard 
                    img = {latestMovie4}
                />
                <LatestMovieCard 
                    img = {latestMovie5}
                />
                <LatestMovieCard 
                    img = {latestMovie6}
                />
            </div>
        </div>
    )
}

export default LatestMovies
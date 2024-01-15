import arrowDown from "../images/upcoming movies arrow down.png"
import UpcomingMovieCard from "./UpcomingMovieCard"
import upcomingMovie1 from "../images/upcoming movies 1.png"
import upcomingMovie2 from "../images/upcoming movies 2.png"
import upcomingMovie3 from "../images/upcoming movies 3.png"
import upcomingMovie4 from "../images/upcoming movies 4.png"
import upcomingMovie5 from "../images/upcoming movies 5.png"

function UpcomingMovies() {
    return (
        <div className="upcomingMovies">
            <div className="upcomingMoviesTitle">UPCOMING MOVIES <img src={arrowDown}></img></div>
            <UpcomingMovieCard 
                img = {upcomingMovie1}
                rating = {3}
                title = "Lorem Ipsum"
                description = "is simply dummy text of the printing"
            />
            <UpcomingMovieCard 
                img = {upcomingMovie2}
                rating = {3}
                title = "Lorem Ipsum"
                description = "is simply dummy text of the printing"
            />
            <UpcomingMovieCard 
                img = {upcomingMovie3}
                rating = {3}
                title = "Lorem Ipsum"
                description = "is simply dummy text of the printing"
            />
            <UpcomingMovieCard 
                img = {upcomingMovie4}
                rating = {3}
                title = "Lorem Ipsum"
                description = "is simply dummy text of the printing"
            />
            <UpcomingMovieCard  
                img = {upcomingMovie5}
                rating = {3}
                title = "Lorem Ipsum"
                description = "is simply dummy text of the printing"
            />
        </div>
    )
}

export default UpcomingMovies
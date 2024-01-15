import featuredMovie1 from "../images/featured movie 1.png"
import featuredMovie2 from "../images/featured movie 2.png"
import featuredMovie3 from "../images/featured movie 3.png"
import FeaturedMovieCard from "./FeaturedMovieCard"


function FeaturedMovies() {
    return (
        <div className="featuredMovies">
            <div className="featuredMoviesTitle">Featured Movies</div>
            <div className="featuredMoviesContainer">
                <FeaturedMovieCard 
                    img = {featuredMovie1}
                />
                <FeaturedMovieCard 
                    img = {featuredMovie2}
                />
                <FeaturedMovieCard 
                    img = {featuredMovie3}
                />
            </div>
        </div>
    )
}

export default FeaturedMovies
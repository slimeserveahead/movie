import PremiumMovieCard from "./PremiumMovieCard"
import premiumMovie1 from "../images/premium movies 1.png"
import premiumMovie2 from "../images/premium movies 2.png"
import premiumMovie3 from "../images/premium movies 3.png"
import premiumMovie4 from "../images/premium movies 4.png"
import premiumMovie5 from "../images/premium movies 5.png"
import premiumMovie6 from "../images/premium movies 6.png"
import premiumMovie7 from "../images/premium movies 7.png"
import premiumMovie8 from "../images/premium movies 8.png"
import premiumMovie9 from "../images/premium movies 9.png"
import premiumMovie10 from "../images/premium movies 10.png"

import premiumMovie11 from "../images/premium movies 11.png"
import premiumMovie12 from "../images/premium movies 12.png"
import premiumMovie13 from "../images/premium movies 13.png"
import premiumMovie14 from "../images/premium movies 14.png"
import premiumMovie15 from "../images/premium movies 15.png"

function PremiumMovies() {
    return (
        <div className="premiumMovies">
            <div className="premiumMoviesTitle">PREMIUM MOVIES</div>
            <div className="premiumMovieContainer">
                <PremiumMovieCard 
                    img = {premiumMovie1}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie2}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie3}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie4}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie5}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie6}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie7}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie8}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie9}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie10}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie11}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie12}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie13}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie14}
                    rating = {3}
                />
                <PremiumMovieCard 
                    img = {premiumMovie15}
                    rating = {3}
                />
            </div>
        </div>
    )
}

export default PremiumMovies
import playButton from "../images/play button.png"
import React from "react"

function FeaturedMovieCard(prop) {
    const [isHovering, setIsHovering] = React.useState(false)

    return (
        <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="featuredMovieCard">
            <img className={isHovering ? "scaleLarger" : ""} src={prop.img}></img>
            <div className={`featuredMovieCardOverlay ${isHovering ? "opacityOne" : ""}`}>
                <img className="featureMoviePlayIcon" src={playButton}></img>
                <div className="featuredMoviePlayButton">
                    PLAY NOW
                </div>
            </div>
        </div>
    )
}

export default FeaturedMovieCard
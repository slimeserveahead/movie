import React from "react"

import banner1 from "../images/banner 1.png"
import banner2 from "../images/banner 2.png"
import banner3 from "../images/banner 3.png"
import banner4 from "../images/banner 4.png"
import banner5 from "../images/banner 5.png"
import starIcon from "../images/star icon.png"
import plusIcon from "../images/plus icon.png"
import MovieBannerData from "./MovieBannerData"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Banner() {
    const [isShowing, setIsShowing] = React.useState(false)

    function changeSlide() {
        setIsShowing(false) 
        setTimeout(() => {
            setIsShowing(true)
        }, 500);
    }
    return (
        <div className="banner">
            <div>
                <Swiper 
                    autoplay={{ speed: 1000, delay: 3000}} 
                    className="bannerContainer"
                    modules={[Autoplay]}
                    loop={true}
                    onSlideChange={changeSlide}
                >
                    {MovieBannerData.map(movie => {
                        return (
                            <>
                            <SwiperSlide key={movie.id}>
                                <img className="movieImage" src={movie.img}></img>
                                <div className={`bannerGradient ${isShowing ? "opacityOne" : ""}`}></div>
                                <div className={`bannerInfo ${isShowing ? "opacityOne" : ""}`}>
                                    <div className="movieDescription">
                                        {movie.description}
                                    </div>
                                    <div className="movieRating">
                                        <img className={`starIcon ${movie.rating > 0.5 ? "starIconActive" : ""}`} src={starIcon}></img>
                                        <img className={`starIcon ${movie.rating > 1.5 ? "starIconActive" : ""}`} src={starIcon}></img>
                                        <img className={`starIcon ${movie.rating > 2.5 ? "starIconActive" : ""}`} src={starIcon}></img>
                                        <img className={`starIcon ${movie.rating > 3.5 ? "starIconActive" : ""}`} src={starIcon}></img>
                                        <img className={`starIcon ${movie.rating > 4.5 ? "starIconActive" : ""}`} src={starIcon}></img>
                                        {movie.views}K
                                    </div>
                                    <div className="bannerButtonsContainer">
                                        <div className="playNowButton">PLAY NOW</div>
                                        <div className="plusButton">
                                            <img src={plusIcon}></img>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <div><img src={movie.img}></img></div>
                            <div>Hello World</div>
                            
                            </>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Banner
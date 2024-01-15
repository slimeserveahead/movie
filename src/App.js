import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import FeaturedMovies from './components/FeaturedMovies';
import LatestMovies from './components/LatestMovies';
import UpcomingMovies from './components/UpcomingMovies';
import PremiumMovies from './components/PremiumMovies';
import Footer from './components/Footer';
import LoginPopup from './components/LoginPopup';
import React from "react"

function App() {
  const [isShowingLogin, setIsShowingLogin] = React.useState(false)

  return (
    <div className="App">
      {isShowingLogin && 
        <LoginPopup 
          isShowingLogin = {isShowingLogin}
          setIsShowingLogin = {setIsShowingLogin}
        />
      }
      <Header 
        setIsShowingLogin = {setIsShowingLogin}
      />
      <div className='main'>
        <div className='mainBackground'></div>
        <Banner />
        <FeaturedMovies />
        <LatestMovies />
      </div>
      <div className='lower'>
        <UpcomingMovies />
        <PremiumMovies />
      </div>
      <Footer />
    </div>
  );
}

export default App;

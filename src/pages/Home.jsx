import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import "./Home.css"
import Search from './Search';


const Home = () => {
  return (
    <div className='home'>
      <div className="home__header">
        <div className="home__headerLeft">
          <p>About</p>
          <p>Store</p>
        </div>
        <div className="home__headerRight">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number-thumbnail.png" alt="Google" />

        <div className="home__inputContainer">
              <Search/>
        </div>
      </div>
    </div>
  )
}

export default Home
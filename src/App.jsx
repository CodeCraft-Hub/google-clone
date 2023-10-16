import React from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <>
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' Component={Home} >
          </Route>
          <Route exact path='/search' Component={SearchPage}></Route>
        </Routes>
      </div>

    </Router>
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
   <a href='/'className="navbar-brand">Pocetna</a>
  <a href='/Kontakt'className="navbar-brand">Kontakt</a>

  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
    </nav>



    </div>
  )
}

export default Navbar

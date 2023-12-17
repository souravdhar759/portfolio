import React from 'react'
import { Link } from 'react-router-dom'
function Navber(props) {
  return (
    <div className='navdiv'><nav  className="navbar navbar-expand-lg  navi">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.main}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Projects">{props.tab}</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Features</a>
          </li>
        
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navber
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Navbar = () => {

    const location = useLocation();
    const path = location.pathname;
    console.log(location.pathname);
  return (
    <>
    <div className='container-fluid nav_bg'>
        <div className="row">
            <div className="col-10 mx-auto">

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h1 className="navbar-brand" >AbiskarLc</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={path==="/"?`nav-link activee`:"nav-link"} aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={path==="/about"?`nav-link activee`:"nav-link"} to={"/about"}>About</Link>
        </li>
        <li className="nav-item">
          <Link className={path==="/contact"?`nav-link activee`:"nav-link"} to={"/contact"}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className={path==="/service"?`nav-link activee`:"nav-link"} to={"/service"}>Services</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

</div>
        </div>
    </div>
    </>
  )
}

export default Navbar

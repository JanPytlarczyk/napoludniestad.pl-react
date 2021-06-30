import React from 'react'

const Navbar = () => {
    return (
    <nav className="navbar sticky-top navbar-expand-md navbar-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav mr-auto">
       <li><a className="nav-link" href="#">Film</a></li>
       <li><a className="nav-link" href="#">Historia</a></li>
       <li> <a className="nav-link" href="#">Kuchnia</a></li>
       </ul>
    <div className= "collapse navbar-collapse mx-auto">
       <a className="navbar-brand " href="#">
       <img src="logo192.png " alt="" class="rounded-circle" ></img> </a>
       </div>

       <div className = "collapse navbar-collapse justify-content-end" id= "navbarNavRightMarkup">
           <ul class="navbar-nav ml-auto">
       <li><a className="nav-link" href="#">Muzyka</a></li>
       <li><a className="nav-link" href="#">Poradniki</a></li>
       <li><a className="nav-link" href="#">O mnie</a></li>
      </ul>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar

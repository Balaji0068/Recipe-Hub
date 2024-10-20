export const Header =()=>{
    return(
        <div>
         <nav
          style={{ height: "10vh",backgroundColor:"black"}}
         className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">
      </a>
      <ul className="navbar-nav fs-4 " style={{position:"relative",left:"35%"}}>
        <li className="nav-item">
          <i className="nav-link mx-3 text-danger" aria-current="page" href="#">
            Home
          </i>
        </li>
        <li className="nav-item">
          <i className="nav-link mx-3 text-danger" href="#">
            Contact
          </i>
        </li>
        <li className="nav-item">
          <i className="nav-link mx-3 text-danger " href="#">
            About Us
          </i>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}
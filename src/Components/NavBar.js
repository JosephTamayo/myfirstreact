const NavBar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <a className="navbar-brand" href="/">ICS2608</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      <a className="nav-link" href="/myfirstreact/employees">Employees</a>
      <a className="nav-link" href="/myfirstreact/add">Add Employees</a>
      <a className="nav-link disabled" href="/myfirstreact">Disabled</a>
    </div>
  </div>
</nav>
        </div>

    )
}

export default NavBar;
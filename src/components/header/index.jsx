import './nav.scss'
function TopNav(params) {
 
  return (
    <nav className="navbar navbar-expand-lg fixed-top" >
      <a className="navbar-brand ml-4 pl-3" href="/home">
        <img src={'/logo4b.png'} className=" img-fluid" height={65} width={65}  alt='amco logo' />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className=""><img src={'/menu-icon.png'}></img> </span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
    
           <li className="nav-item">
            <a className="nav-link" href="/">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Bills & Motions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default TopNav

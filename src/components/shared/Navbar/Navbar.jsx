import { dropdown, logo, search } from '../../../assets/getAssets';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container max-w-container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="search-input-box border">
                  <img src={search} alt="" />
                  <input
                    className="me-2 w-100"
                    type="text"
                    placeholder="Search for your favorite groups in ATGrch"
                    aria-label="Search"
                  />
                </div>
              </li>
            </ul>
            <div className="d-flex">
              <div className="btn create-account-btn" type="submit">
                <div>
                  Create account. <span>It’s free!</span>
                </div>

                <img src={dropdown} alt="" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import { dropdown, logo, search } from '../../../assets/getAssets';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top ">
        <div className="container max-w-container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn create-account-btn d-lg-none"
          >
            <div>
              <span>Create account. </span>
            </div>

            <img src={dropdown} alt="" />
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
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn create-account-btn"
              >
                <div>
                  Create account. <span>It’s free!</span>
                </div>

                <img src={dropdown} alt="" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import { banner } from "../../../assets/getAssets";
import "./Header.css";
function Header() {
  return (
    <div className="header-banner">
      <div className="banner-container d-flex flex-column justify-content-end  h-100">
        <div className="banner-text">
          <div className="title">Computer Engineering</div>
          <div className="sub-title">
            142,765 Computer Engineers follow this
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

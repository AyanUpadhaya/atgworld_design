import { useState } from "react";
import { banner } from "../../../assets/getAssets";
import "./Header.css";
function Header() {
  const [isJoined, setIsJoined] = useState(false);
  return (
    <div className="header-banner">
      <div className="banner-container d-flex flex-column  h-100 px-4">
        <div className="banner-text-one d-md-none d-flex justify-content-between pt-5 mb-auto">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                fill="white"
              />
            </svg>
          </div>
          {!isJoined ? (
            <button onClick={() => setIsJoined(true)} className="join-btn">
              Join Group
            </button>
          ) : (
            <button onClick={() => setIsJoined(false)} className="join-btn">
              Joined
            </button>
          )}
        </div>
        <div className="mt-auto d-flex flex-column justify-content-end">
          <div className="banner-text">
            <div className="title">Computer Engineering</div>
            <div className="sub-title">
              142,765 Computer Engineers follow this
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

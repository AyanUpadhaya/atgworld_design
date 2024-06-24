import { useState } from "react";
import { authImage, facebook, google } from "../../../assets/getAssets";
import "./AuthModal.css";
import useAuth from "../../../hooks/useAuth";

const SignUp = ({handleView}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    const { isAuthenticated } = useAuth();
  return (
    <div className="modal-body">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="signup-title">Create Account</div>
          <div className="form-subheading text-start d-lg-none">
            Already have an account?{" "}
            <span
              className="cursor-pointer"
              onClick={() => handleView("login")}
            >
              Sign In
            </span>
          </div>
          <form action="">
            <div className="form-group-input">
              <div className="d-flex">
                <input type="text" className="w-50" placeholder="First Name" />
                <input type="text" className="w-50" placeholder="Last Name" />
              </div>
              <div>
                <input type="email" className="w-100" placeholder="Email" />
              </div>
              <div className="password-field">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="w-100"
                  placeholder="Password"
                />
                <button
                  onClick={togglePasswordVisibility}
                  type="button"
                  className="visible-btn"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="icon/action/visibility_24px">
                      <path
                        id="icon/action/visibility_24px_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                        fill="#8A8A8A"
                      />
                    </g>
                  </svg>
                </button>
              </div>
              <div className="d-flex">
                <input
                  type="password"
                  className="w-100"
                  placeholder="Confirm password"
                />
              </div>
            </div>
            <div className="form-button-group">
              <div>
                <button type="button" className="create-btn">
                  Create Account
                </button>
              </div>
              <div className="social-buttons">
                <button type="button" className="facbook-btn">
                  <div>
                    <img src={facebook} alt="" />
                  </div>
                  <div>Sign up with Facebook</div>
                </button>

                <button type="button" className="google-btn">
                  <div>
                    <img src={google} alt="" />
                  </div>
                  <div>Sign up with Google</div>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="d-none d-lg-block col-12 col-lg-6 d-lg=flex flex-column justify-content-between">
          <div className="form-subheading text-end">
            Already have an account?{" "}
            <span
              className="cursor-pointer"
              onClick={() => handleView("login")}
            >
              Sign In
            </span>
          </div>
          <div className=" mb-5">
            <img src={authImage} className="authImage " alt="auth group" />
          </div>
          <div className=" form-footer-text ">
            By signing up, you agree to our Terms & conditions, Privacy policy
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp
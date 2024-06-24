import { useState } from "react";
import { authImage, facebook, google } from "../../../assets/getAssets";
import "./AuthModal.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import useAuth from "../../../hooks/useAuth";
const AuthModal = () => {
  const [view, setView] = useState("register");
  const { isAuthenticated } = useAuth();
  const handleView = (viewName) => {
    setView(viewName);
  };
  if (isAuthenticated) {
    // Close modal if authenticated
    document.getElementById("exampleModal").modal("hide");
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg ">
        <div className="d-flex justify-content-end mb-2 cursor-pointer  ">
          <button
            type="button"
            className="btn-close bg-white rounded-full rounded-circle p-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-content ">
          <div className="modal-header d-flex justify-content-center">
            <div>
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </div>
          </div>
          {view == "register" ? (
            <SignUp handleView={handleView}></SignUp>
          ) : (
            <SignIn handleView={handleView}></SignIn>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

import { useState } from "react";
import "./Main.css";
import { dropdownlight, usergroup } from "../../../assets/getAssets";

const Main = () => {
  const [categoryNumber, setCategoryNumber] = useState(1);
  return (
    <div className="max-w-container top-padding-32">
      <div className="main-content">
        <div className="row filter-container ">
          <div className="col-md-8 d-flex flex-column justify-content-center p-0 m-0 ">
            <ul className="list-unstyled tab-list my-auto">
              <li
                onClick={() => setCategoryNumber(1)}
                className={`tab-list-item ${
                  categoryNumber == 1 ? "selected-item" : ""
                }`}
              >
                All Posts(32)
              </li>
              <li
                onClick={() => setCategoryNumber(2)}
                className={`tab-list-item ${
                  categoryNumber == 2 ? "selected-item" : ""
                }`}
              >
                Article
              </li>
              <li
                onClick={() => setCategoryNumber(3)}
                className={`tab-list-item ${
                  categoryNumber == 3 ? "selected-item" : ""
                }`}
              >
                Event
              </li>
              <li
                onClick={() => setCategoryNumber(4)}
                className={`tab-list-item ${
                  categoryNumber == 4 ? "selected-item" : ""
                }`}
              >
                Education
              </li>
              <li
                onClick={() => setCategoryNumber(5)}
                className={`tab-list-item ${
                  categoryNumber == 5 ? "selected-item" : ""
                }`}
              >
                Job
              </li>
            </ul>
          </div>
          <div className="col-md-4 d-flex gap-2 justify-content-end  p-0 m-0">
            <button className="btn btn-cs-light">
              <span>Write Post</span>
              <img src={dropdownlight} alt="" />
            </button>
            <button className="btn btn-cs-primary">
              <img src={usergroup} alt="" />
              <span>Join Group</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

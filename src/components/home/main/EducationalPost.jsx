import {
  dotgroup,
  share,
  visibility,
} from "../../../assets/getAssets";
import "./Main.css";
const EducationalPost = ({post}) => {
  return (
    <div className="card post-card">
      <div className="card-top">
        <img src={post?.coverImage} className="img-fluid" alt="post-cover" />
      </div>
      <div className="card-content">
        <div className="d-flex gap-2 align-items-center  ">
          <div>{post?.icon}</div>
          <div className="mt-2 card-content-title text-capitalize">
            {post?.type}
          </div>
        </div>
        <div className="card-content-post-area">
          <div className="d-flex justify-content-between gap-24">
            <h3 className="card-content-post-title">{post?.postTitle}</h3>
            {/* dropdown section */}
            <div>
              <button
                className="dropdown-btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={dotgroup} className="card-options-icon" alt="" />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end drop-shadow-combined w-160"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Edit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Report
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-post-description-area">
          <p className="card-description">{post?.postDescription}</p>
        </div>
        <div className="mt-4 d-flex align-items-center justify-content-between">
          {/* post author */}
          <div className="d-flex gap-2 align-items-center">
            <img
              src={post?.postAuthorImage}
              className="post-author-image"
              alt=""
            />
            <h5 className="post-author-name">{post?.postAuthorName}</h5>
          </div>
          {/* view and share */}
          <div className="d-flex justify-content-between gap-40">
            <div className="d-flex gap-2 align-items-center">
              <div>
                <img src={visibility} className="visibility-icon" alt="" />
              </div>
              <div className="view-count-text ">{post?.viewCount}</div>
            </div>
            <div>
              <img src={share} className="share-icon" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalPost;

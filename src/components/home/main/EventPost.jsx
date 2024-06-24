import {
  dotgroup,
  eventicon,
  location,
  share,
  visibility,
} from "../../../assets/getAssets";
import "./Main.css";

const EventPost = ({ post }) => {
  return (
    <div className="card post-card">
      <div className="card-top">
        <img src={post?.coverImage} className="img-fluid" alt="post-cover" />
      </div>
      <div className="card-content">
        <div className="d-flex gap-2 align-items-center  ">
          <div>{post?.icon}</div>
          <div className="mt-2 card-content-title text-capitalize">
            {post?.type == "event" ? "Meetup" : ""}
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
          <div className="d-flex flex-wrap align-items-center gap-40">
            {/* event time */}
            <div className="d-flex gap-1 align-items-end">
              <div>
                <img src={eventicon} alt="" />
              </div>
              <div className="post-event-text pt-1">{post?.time}</div>
            </div>
            {/* event location */}
            <div className="d-flex gap-1 align-items-end">
              <div>
                <img src={location} alt="" />
              </div>
              <div className="post-event-text pt-1">{post?.location}</div>
            </div>
          </div>
          <div className="mt-16 mb-32 ">
            <a href={post?.webLink}>
              <div className="event-link-btn">View Website</div>
            </a>
          </div>
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

export default EventPost;

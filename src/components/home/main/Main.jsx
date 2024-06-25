import { useState } from "react";
import "./Main.css";
import {
  dropdownlight,
  location,
  usergroup,
  closeicon,
  editicon,
  leave,
} from "../../../assets/getAssets";
import { postData, groupData } from "../../../fakedb/db";
import PostList from "./PostList";
import AuthModal from "../../modals/AuthModal/AuthModal";
import useAuth from "../../../hooks/useAuth";

const Main = () => {
  const [categoryNumber, setCategoryNumber] = useState(1);
  const [selectedTab, setSelectedTab] = useState("all");
  const [myGroupData, setMyGroupData] = useState(groupData);
  const [isJoined, setIsJoined] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleFollowAndUnfollow = (groupId) => {
    const updatedGroupData = myGroupData.map((group) =>
      group.groupId === groupId
        ? { ...group, following: !group.following }
        : group
    );
    setMyGroupData(updatedGroupData);
  };

  const filteredPosts =
    selectedTab === "all"
      ? postData
      : postData.filter((post) => post.type === selectedTab);
  const handleTabAndPosts = (categroyNumber, postType) => {
    setCategoryNumber(categroyNumber);
    setSelectedTab(postType);
  };
  return (
    <div className=" max-w-container top-padding-32  mb-5">
      <div className="main-content">
        <div className="filter-container-mobile d-flex d-lg-none justify-content-between align-items-center flex-wrap">
          <div className={`text-strong-heading`}>
            Posts ({postData?.length})
          </div>
          <button
            className="btn btn-cs-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div>
              Filter: <span className="text-capitalize">{selectedTab}</span>
            </div>
            <img src={dropdownlight} alt="" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <div
                onClick={() => setSelectedTab("all")}
                className="dropdown-item"
              >
                All
              </div>
            </li>
            <li>
              <div
                onClick={() => setSelectedTab("article")}
                className="dropdown-item"
              >
                Article
              </div>
            </li>
            <li>
              <div
                onClick={() => setSelectedTab("event")}
                className="dropdown-item"
              >
                Event
              </div>
            </li>
            <li>
              <div
                onClick={() => setSelectedTab("education")}
                className="dropdown-item"
              >
                Education
              </div>
            </li>
          </ul>
        </div>
        <div className="row gap-5 gap-lg-0 filter-container  ">
          <div className="col-12 col-lg-8 d-flex flex-column justify-content-center p-0 m-0 sidebar ">
            <ul className="list-unstyled tab-list my-auto">
              <li
                onClick={() => handleTabAndPosts(1, "all")}
                className={`tab-list-item ${
                  categoryNumber == 1 ? "selected-item" : ""
                }`}
              >
                All Posts({postData?.length})
              </li>
              <li
                onClick={() => handleTabAndPosts(2, "article")}
                className={`tab-list-item ${
                  categoryNumber == 2 ? "selected-item" : ""
                }`}
              >
                Article
              </li>
              <li
                onClick={() => handleTabAndPosts(3, "event")}
                className={`tab-list-item ${
                  categoryNumber == 3 ? "selected-item" : ""
                }`}
              >
                Event
              </li>
              <li
                onClick={() => handleTabAndPosts(4, "education")}
                className={`tab-list-item ${
                  categoryNumber == 4 ? "selected-item" : ""
                }`}
              >
                Education
              </li>
              <li
                onClick={() => handleTabAndPosts(5, "job")}
                className={`tab-list-item ${
                  categoryNumber == 5 ? "selected-item" : ""
                }`}
              >
                Job
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 d-flex gap-2 justify-content-start justify-content-lg-end flex-wrap   p-0 m-0">
            <button className="btn btn-cs-light">
              <span>Write Post</span>
              <img src={dropdownlight} alt="" />
            </button>
            {!isJoined ? (
              <button
                onClick={() => setIsJoined(true)}
                className="btn btn-cs-primary"
              >
                <img src={usergroup} alt="" />
                <span>Join Group</span>
              </button>
            ) : (
              <button
                onClick={() => setIsJoined(false)}
                className="btn btn-cs-leave"
              >
                <img src={leave} alt="" />
                <span>Leave group</span>
              </button>
            )}
          </div>
        </div>
        <div className="row align-items-start mt-4">
          <div className="col-12 col-lg-8  m-0 p-0">
            <PostList posts={filteredPosts}></PostList>
          </div>
          <div className="col-12 col-lg-4  m-0 p-0 d-flex gap-2 justify-content-start justify-content-lg-end flex-wrap sidebar-area">
            {/* search area */}
            <div className="search-box-container d-flex align-items-end search-box">
              <div>
                <img src={location} alt="" />
              </div>
              <div className="flex-fill">
                <input
                  placeholder="|Enter your location"
                  type="text"
                  className="search-box-input"
                />
              </div>
              <div className="edit-icon">
                <img src={editicon} alt="" />
              </div>
            </div>
            <div className="search-box-note-container d-flex gap-2">
              {/* icon */}
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5" clip-path="url(#clip0_1_853)">
                    <path
                      d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_853">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* text */}
              <div className="search-box-note">
                Your location will help us serve better and extend a
                personalised experience.
              </div>
            </div>
            <div className={`recommended-groups-container ${isAuthenticated?'d-block':'d-none'}`}>
              <div className="d-flex gap-1 align-items-center mb-24">
                <div>
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      d="M15.75 9.00012V7.50012H9L10.005 3.49512L6.75 6.75012V14.2501H13.5L15.75 9.00012Z"
                      fill="black"
                    />
                    <path
                      d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="container-heading pt-2">Recommended Groups</div>
              </div>
              <div className="d-flex flex-column gap-22 mb-5">
                {myGroupData.map((item, index) => {
                  const { groupImge, groupTitle, following, groupId } = item;

                  return (
                    <div
                      key={index}
                      className="d-flex align-items-center gap-2"
                    >
                      <div>
                        <img
                          className="groupImge"
                          src={groupImge}
                          alt={`${groupTitle} image`}
                        />
                      </div>
                      <div className="text-capitalize group-title">
                        {groupTitle}
                      </div>
                      <div className="ms-auto">
                        {following ? (
                          <button
                            onClick={() => handleFollowAndUnfollow(groupId)}
                            className="followed-btn"
                          >
                            Followed
                          </button>
                        ) : (
                          <button
                            onClick={() => handleFollowAndUnfollow(groupId)}
                            className="follow-btn"
                          >
                            Follow
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-end text-primary">
                <span className="text-capitalize">See More...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthModal></AuthModal>
    </div>
  );
};

export default Main;

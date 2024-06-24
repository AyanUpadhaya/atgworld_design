import { useState } from "react";
import "./Main.css";
import { dropdownlight, postcover, randomuser, share, usergroup, visibility } from "../../../assets/getAssets";
import PostCard from "./PostCard";
import { postData } from "../../../fakedb/db";
import PostList from "./PostList";

const Main = () => {
  const [categoryNumber, setCategoryNumber] = useState(1);
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredPosts =
    selectedTab === "all"
      ? postData
      : postData.filter((post) => post.type === selectedTab);
  const handleTabAndPosts = (categroyNumber,postType)=>{
    setCategoryNumber(categroyNumber);
    setSelectedTab(postType);
  }
  return (
    <div className="container max-w-container top-padding-32 px-4">
      <div className="main-content">
        <div className="row gap-5 gap-lg-0 filter-container ">
          <div className="col-12 col-lg-8 d-flex flex-column justify-content-center p-0 m-0 ">
            <ul className="list-unstyled tab-list my-auto">
              <li
                onClick={() => handleTabAndPosts(1, "all")}
                className={`tab-list-item ${
                  categoryNumber == 1 ? "selected-item" : ""
                }`}
              >
                All Posts(32)
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
            <button className="btn btn-cs-primary">
              <img src={usergroup} alt="" />
              <span>Join Group</span>
            </button>
          </div>
        </div>
        <div className="row mt-4 border">
          <div className="col-12 col-lg-8  m-0 p-0">
            <PostList posts={filteredPosts}></PostList>
          </div>
          <div className="col-12 col-lg-4  m-0 p-0">
            <div className="search-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

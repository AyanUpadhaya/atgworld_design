import ArticlePost from "./ArticlePost";
import EducationalPost from "./EducationalPost";
import EventPost from "./EventPost";
import JobPost from "./JobPost";
import './Main.css'

const PostList = ({posts}) => {
  return (
    <div className="d-flex flex-column gap-16">
      {posts?.map((post, index) => {
        switch (post.type) {
          case "article":
            return <ArticlePost key={index} post={post} />;
          case "education":
            return <EducationalPost key={index} post={post} />;
          case "event":
            return <EventPost key={index} post={post} />;
          case "job":
            return <JobPost key={index} post={post} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export default PostList
import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<any>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e:any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setComments([inputValue,...comments]);
      setInputValue("");
    }
  };

  return (
    <div className="comment-section">
      <div className="bellowsection-comment">
        <img
          className="img-comment-main"
          src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/316296609_666230721811653_2313825525741665355_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JGOAXYrFdmEAX-DEGOm&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfDjjWh_VzKQP1QO0f0wWd5yV_uFtY0rxXRHx7R-r6wD3Q&oe=64A3B19D"
          alt="profileimg"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="input-commentbox"
          type="text"
          placeholder="Write a comment..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
      <div className="comments-list">
        {comments.map((comment:any, index:number) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;

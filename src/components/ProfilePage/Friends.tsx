import {Link} from "react-router-dom"
import friendsdata from "../../assets/friendslist.json";
import Friendslist from "./FriendsList";

const Friends = () => {
  return (
    <div className="friendslist">
      <h3>Friends</h3>
      <nav>
        <Link className="nav-tags" to="/Allfriends">All Friends</Link>
        <Link className="nav-tags" to="/Recentlyadded">Recently Added</Link>
        <Link className="nav-tags" to="/Birthdays">Birthdays</Link>
        <Link className="nav-tags" to="/Work">Work</Link>
        <Link className="nav-tags" to="/CurrentCity">Current City</Link>
        <Link className="nav-tags" to="/Following">Following</Link>
      </nav>
      {friendsdata.map((content) => {
        return (
          <Friendslist key={content.id}
            img1={content.img1}
            name1={content.name1}
            para1={content.para1}
            img2={content.img2}
            name2={content.name2}
            para2={content.para2}
          />
        );
      })}
    </div>
  );
};

export default Friends;

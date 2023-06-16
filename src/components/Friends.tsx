import friendsdata from "../assets/friendslist.json";
import Friendslist from "./FriendsList";

const Friends = () => {
  return (
    <div className="friendslist">
      <h3>Friends</h3>
      <nav>
        <a className="nav-tags" href="/allfriends">
          All Friends
        </a>
        <a className="nav-tags" href="/allfriends">
          Recently Added
        </a>
        <a className="nav-tags" href="/allfriends">
          Birthdays
        </a>
        <a className="nav-tags" href="/allfriends">
          Work
        </a>
        <a className="nav-tags" href="/allfriends">
          Current City
        </a>
        <a className="nav-tags" href="/allfriends">
          Following
        </a>
      </nav>
      {friendsdata.map((item) => {
        return (
          <Friendslist
            img1={item.img1}
            name1={item.name1}
            para1={item.para1}
            img2={item.img2}
            name2={item.name2}
            para2={item.para2}
          />
        );
      })}
    </div>
  );
};

export default Friends;

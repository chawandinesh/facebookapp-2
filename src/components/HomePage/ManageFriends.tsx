import Header from "../Header";
import LeftProfilepage from "../ProfilePage/LeftProfilepage";
import FriendRequest from "./FriendRequest";
import Friendrequest from "../../assets/FriendRequest.json"
import MutualFriends from "./MutualFriends";

const ManageFriends = () => {
  return (
    <div>
      <Header />
      <div className="Center-Managefriends">
      <LeftProfilepage />
        <div className="leftsection-Managefriends"></div>
        <div className="rightsection-Managefriends">
          <h2 className="FriendRequest-page-names">Friend Requests</h2>
          <div className="FriendRequest-list">
          {Friendrequest.map((item, index) => (
            <FriendRequest
              key={index}
              src={item.src}  
              Name={item.Name}
              btn1={item.conform}
              btn2={item.delete}
            />
          ))}
        </div>
        <MutualFriends/>
      </div>
    </div>
    </div>
  );
};

export default ManageFriends;

import Header from "../components/Header";
import LeftProfilepage from "../components/ProfilePage/LeftProfilepage";
import FriendRequest from "../components/HomePage/FriendRequest";
import Friendrequest from "../assets/FriendRequest.json"
import Friends from "../assets/MutualFriends.json"
import axios from "axios";
import LeftsectionManagefriends from "../components/HomePage/LeftsectionManagefriends";

const ManageFriends = () => {

  const handleAddFriend = async (item: any) => {
    console.log('handleAddFriend')
    console.log(item)
    try {
      const response = await axios.post('http://localhost:3001/pendingRequest', item)
      console.log('Friend name stored in JSON server:', response.data);

    } catch (error) {
      console.error('Error storing friend name:', error);
    }

  }

  const handleConfirm = async (item: any) => {
    const userId = localStorage.getItem("current userId");
    console.log(userId);
    const data = {
      ...item,
      userid: userId,
    };

    try {
      const response = await axios.post("http://localhost:3001/friends", data);
      console.log("Friend name stored in JSON server:", response.data);
    } catch (error) {
      console.error("Error storing friend name:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="Center-Managefriends">
        <LeftProfilepage />
        <LeftsectionManagefriends />
        <div className="rightsection-Managefriends">
          <h2 className="FriendRequest-page-names">Friend Requests</h2>
          <div className="FriendRequest-list">
            {Friendrequest.map((item, index) => (
              <FriendRequest
                key={index}
                src={item.src}
                Name={item.Name}
                btn1={"Confirm"}
                btn2={"Delete"}
                handleClick1={()=>handleConfirm(item)}
              />
            ))}
          </div>
          <div className="above-line-mutual"></div>
          <div className="FriendRequest-list">
            <div className="heading-mutualfriends">
              <h3>People You May Know</h3>
              <a href="/">See all</a>
            </div>
            {Friends.map((item, index) => (
              <FriendRequest
                key={index}
                src={item.src}
                Name={item.Name}
                btn1={"AddFriend"}
                btn2={"Remove"}
                buttonStyle={{ backgroundColor: '#e7f3ff', color: '#1879f2' }}
                handleClick1={() => handleAddFriend(item)}
                btn2replace={"Pending request"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageFriends;

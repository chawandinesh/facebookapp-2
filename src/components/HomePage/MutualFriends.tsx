import FriendRequest from "./FriendRequest"
import Friends from "../../assets/MutualFriends.json"
import axios from "axios"

const MutualFriends = () => {
    const handleAddFriend = async (item: any) => {
        console.log(item)
        try {
          const response = await axios.post('http://localhost:3001/pendingRequest', item)
          console.log('Friend name stored in JSON server:', response.data);
        } catch (error) {
          console.error('Error storing friend name:', error);
        }
    
      }
  return (
    <div className="mutual-friends">
     <div className="above-line-mutual"></div>
     <div className="heading-mutualfriends">
     <h3>People You May Know</h3>
     <a href="/">See all</a>
     </div>
     <div className="FriendRequest-list">
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
  )
}
export default MutualFriends

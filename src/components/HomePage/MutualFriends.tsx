import FriendRequest from "./FriendRequest"
import Friends from "../../assets/MutualFriends.json"

const MutualFriends = () => {
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
              btn1={item.AddFriend}
              btn2={item.Remove}
              buttonStyle = {{ backgroundColor: '#e7f3ff', color:'#1879f2' }}
            />
          ))}
        </div>
        </div>
  )
}
export default MutualFriends

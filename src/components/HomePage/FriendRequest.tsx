const FriendRequest:React.FC<any> = (props) => {
  return (
  <div className="FriendRequest-page-container">
  <div className="FriendsRequest-Container">
    <div>
    <img className="image-container" src={props.src}/>
    <h3 className="image-name-container">{props.Name}</h3>
    <button className="btn-conform-request">Confirm</button>
    <button className="btn-Delete-request">Delete</button>
    </div>
  </div>
  </div>
  )
}

export default FriendRequest

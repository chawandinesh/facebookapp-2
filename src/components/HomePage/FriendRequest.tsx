import { useState } from 'react';
import axios from 'axios';

const FriendRequest: React.FC<any> = (props) => {
  const [showRequest, setShowRequest] = useState(true);
  const [showConfirmButton, setShowConfirmButton] = useState(true);
  const [requestAccepted, setRequestAccepted] = useState(false);

  const handleConfirmClick = async () => {
    setShowConfirmButton(false);
    setRequestAccepted(true);

    const friendName = {name: props.Name};

    // sending friend name to the JSON server
    try {
      const response = await axios.post('http://localhost:3001/friends', friendName)
      console.log('Friend name stored in JSON server:', response.data);
    } catch (error) {
      console.error('Error storing friend name:', error);
    }
  };

  const handleDeleteClick = () => {
    setShowRequest(false);
  };

  if (!showRequest) {
    return null;
  }

  return (
    <div className="FriendRequest-page-container">
      <div className="FriendsRequest-Container">
        <div>
          <img className="image-container" src={props.src} alt="Profile" />
          <h3 className="image-name-container">{props.Name}</h3>
          {showConfirmButton && (
            <button className="btn-conform-request" style={props.buttonStyle} onClick={handleConfirmClick}>
           {props.btn1}
            </button> 
          )}
          {requestAccepted ? (
            <p className="btn-Delete-request">Request Accepted</p>
          ) : (
            showConfirmButton && (
              <button className="btn-Delete-request" onClick={handleDeleteClick}>
           {props.btn2}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;

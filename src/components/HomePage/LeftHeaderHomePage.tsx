import { useNavigate } from "react-router-dom";
import { FcVideoFile } from "react-icons/fc";
import { GiDogHouse } from "react-icons/gi";
import { CgGames } from "react-icons/cg";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
const LeftHeaderHomePage = () => {
  const navigate = useNavigate();
  const navigateclick = () => {
    navigate('/profile');
  };
  return (
    <div className="side-section">
      <div className="left-top-1">
        <i className="fa-solid fa-house house"></i>
        <p>Home</p>
      </div>
      <div className="left-top-1">
        <img onClick={navigateclick}
          className="profile-img-homepage"
          src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/316296609_666230721811653_2313825525741665355_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JGOAXYrFdmEAX-DEGOm&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfDjjWh_VzKQP1QO0f0wWd5yV_uFtY0rxXRHx7R-r6wD3Q&oe=64A3B19D" alt="profileimg"
        />
        <p className="name-home-left">Pavan Kothapalli</p>
      </div>
      <div className="line-homepage"></div>
      <div className="icons-left">
        <div className="left-top-1">
          <i className="video-logo-home"><FcVideoFile /></i>
          <p className="watch-txt">Watch</p>
        </div>
        <div className="left-top-1">
          <i className="housebtn"><GiDogHouse /></i>
          <p className="watch-txt">Marketplace</p>
        </div>
        <div className="left-top-1">
          <i className="gamingbtn"><CgGames /></i>
          <p className="watch-txt">Gaming</p>
        </div>
        <div className="left-top-1">
          <i className="see-allbtn">< BsFillGrid3X3GapFill /></i>
          <p className="watch-txt">See all</p>
        </div>
        <div className="line-homepage"></div>
      </div>
    </div>
  );
};

export default LeftHeaderHomePage;

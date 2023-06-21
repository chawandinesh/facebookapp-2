import { FcVideoFile } from "react-icons/fc";
import { GiDogHouse } from "react-icons/gi";
import { CgGames } from "react-icons/cg";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
const LeftHeaderHomePage = () => {
  return (
    <div className="left-top-homepage">
      <div className="left-top-1">
        <i className="fa-solid fa-house house"></i>
        <p>Home</p>
      </div>
      <div className="left-top-1">
        <img
          className="profile-img-homepage"
          src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/316296609_666230721811653_2313825525741665355_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VFpusCRxd3EAX_rCZuF&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfC3GEd8CRB7IdGJsbOheJ0zR0qG59YHGl4B7wWbUhtYHg&oe=648DF0DD"
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

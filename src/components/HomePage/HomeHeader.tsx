import { useNavigate } from "react-router-dom";
import LeftHeaderHomePage from "./LeftHeaderHomePage";
import FeedSectionHome from "./FeedSectionHome";
import RightSectionHome from "./RightSectionHome";
import storiesdata from "../../assets/StoriesHome.json";

const HomeHeader = () => {
  const navigate = useNavigate();
  const navigateclick = () => {
    navigate('/profile');
  };
  return (
    <>
      <header className="header-class">
        <div className="container-1">
          <a className="title-decoration" href="/home"><h1 className="title-header">facebook</h1></a>
        </div>
        <div className="container1-homepage">
          <input 
            type="text"
            placeholder="Search facebook"
            className="search-homepage"
          />
        </div>
        <div className="container-2-homepage">
          <i className="fa-brands fa-facebook-messenger icon"></i>
          <i className="fa-solid fa-bell bell"></i>
          <div className="profile-pic pic1">
            <img onClick={navigateclick}
              className="profile-img"
              src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/316296609_666230721811653_2313825525741665355_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JGOAXYrFdmEAX-DEGOm&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfDjjWh_VzKQP1QO0f0wWd5yV_uFtY0rxXRHx7R-r6wD3Q&oe=64A3B19D"alt="profileimg"
            />
          </div>
        </div>
      </header>
      <div>
      <LeftHeaderHomePage />
      </div>
      
      <div className="left-portion-Homepage">
      {storiesdata.map((items,index)=>{
        return(
          <FeedSectionHome key={index}
          data1={items.data1}
          data2={items.data2}
          data3={items.data3}
          data4={items.data4}
          />
        );
      })}
        <RightSectionHome />
      </div>
    </>
  );
};

export default HomeHeader;

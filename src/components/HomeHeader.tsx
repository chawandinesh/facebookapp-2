
import LeftHeaderHomePage from "./LeftHeaderHomePage";
import FeedSectionHome from "./FeedSectionHome";
import RightSectionHome from "./RightSectionHome";

const HomeHeader = () => {
  return (
    <>
      <header className="header-class">
        <div className="container-1">
          <h1 className="title-header">facebook</h1>
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
            <img
              className="profile-img"
              src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/316296609_666230721811653_2313825525741665355_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VFpusCRxd3EAX_rCZuF&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfC3GEd8CRB7IdGJsbOheJ0zR0qG59YHGl4B7wWbUhtYHg&oe=648DF0DD"
            />
          </div>
        </div>
      </header>
      <div className="left-portion-Homepage">
        <LeftHeaderHomePage/>
        <FeedSectionHome/>
        <RightSectionHome/>
      </div>
    </>
  );
};

export default HomeHeader;

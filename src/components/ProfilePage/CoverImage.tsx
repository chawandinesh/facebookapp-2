import {Link} from "react-router-dom"
import LeftProfilepage from "./LeftProfilepage";

const CoverImage = () => {
  return (
    <div className="page1">
      <LeftProfilepage />
      <div className="Container-coverimg">
        <div className="coverimg">
          <img
            className="cover-img"
            src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.6435-9/119139264_156207396147324_2672178145281449554_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=uN0ZAC_oXrAAX_bv5IX&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfCSbU8agld5vRrx8AFDqCiuAwpaYaxXMbLb9fkR7-p08w&oe=6497949C" alt="coverimg"
          />
        </div>
        <div className="bottom-coverimg">
          <img
            className="profile-img2"
            src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/316296609_666230721811653_2313825525741665355_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=k6tuWGLRZs4AX8gZJc5&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfAZVYK0phB0k22Nj1W7Acti_gcsUk7tBg8FJHOIH8Ui-g&oe=6499CE5D" alt="profileimg"
          />
        </div>
        <div className="img-des">
          <h1>Pavan Kothapalli</h1>
          <p>432 friends</p>
        </div>
        <div className="btn-profileimg">
          <button className="addtostory-btn">+ Add to story</button>
          <button className="editprofile-btn">Edit profile</button>
        </div>
        <div className="line-bellow-img"></div>
        <div className="nav-tags-profile">
          <div className="navigation-main-profile">
            <nav>
              <Link className="nav-tags" to="/Posts">Posts</Link>
              <Link className="nav-tags" to="/About">About</Link>
              <Link className="nav-tags" to="/Friends">Friends</Link>
              <Link className="nav-tags" to="/Photos">Photos</Link>
              <Link className="nav-tags" to="/Videos">Videos</Link>
              <Link className="nav-tags" to="/Check-ins">Check-ins</Link>
              <Link className="nav-tags" to="/More">More</Link>
            </nav>
          </div>
          <div className="btn-last">
            <button className="dot-btn">...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;

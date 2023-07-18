import { FcVideoFile } from "react-icons/fc";
import { GiDogHouse } from "react-icons/gi";
import { CgGames } from "react-icons/cg";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
const LeftProfilepage = () => {
  return (
    <div className="left-portion-proflepage">
      <div className="left-houseicon-profilepage">
       <a href="/home"><i className="fa-solid fa-house houseicon"></i></a> 
        <div className="left-top-1">
          <a href="/profile"><img
            className="profile-img-profilepage"
            src="https://scontent.fhyd2-2.fna.fbcdn.net/v/t39.30808-6/316296609_666230721811653_2313825525741665355_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=j1GQgvUvXuYAX8bkP2-&_nc_ht=scontent.fhyd2-2.fna&oh=00_AfDlybcm2Av_6dtYK0ye-LUuuvPYdKEBLR_jpfdIyYkC7w&oe=64B57DDD"
          /></a>
        </div>
        <div className="lineunder-profileleft"></div><br/>  
        <i className="video-logo-home2"><FcVideoFile /></i><br/><br/>
        <i className="housebtn-profile"><GiDogHouse /></i><br/><br/>
        <i className="gamingbtn2"><CgGames /></i><br/><br/>
        <i className="see-allbtn2">< BsFillGrid3X3GapFill /></i>
        <div className="lineunder-profileleft"></div> 
      </div>
    </div>
  )
}

export default LeftProfilepage

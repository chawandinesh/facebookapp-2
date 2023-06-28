import HomeMiddle2 from "./HomeMiddle2"
import HomeMiddle3 from "./HomeMiddle3"
import feedData from "../../assets/FeedSectionData.json"

const FeedSectionHome:React.FC<any> = (props) => {
  return (
    <div className="feed-maincontent-homepage">
      <div className="head-body-homepage">
        <div className="head-feed-homepage">
          <h3>Stories</h3>
          <h3>Reels</h3>
        </div>
        <div className="head-body-middleline"></div>
        <div className="feed-body-main">
          <div className="body-feed-homepage">
          <img className="img" src={props.data1}/>
          </div>
          <div className="body-feed-homepage">
          <img className="img" src={props.data2}/>
          </div>
          <div className="body-feed-homepage">
          <img  className="img" src={props.data3}/>
          </div>
          <div className="body-feed-homepage">
          <img className="img"src={props.data4}/>
          </div>
        </div>
      </div>
      <HomeMiddle2 />
       {feedData.map((items,index)=>{
        return(
          <HomeMiddle3 key={index}
          logo={items.logo}
          logoheading={items.logoheading}
          description={items.description}
          Hashtags={items.Hashtags}
          mainpost={items.mainpost}
          />
        );
       })}
    </div>
  )
}

export default FeedSectionHome

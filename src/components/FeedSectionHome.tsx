import HomeMiddle2 from "./HomeMiddle2"
import HomeMiddle3 from "./HomeMiddle3"

const FeedSectionHome = () => {
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
      </div>
      <div className="body-feed-homepage">
      </div>
      <div className="body-feed-homepage">
      </div>
      <div className="body-feed-homepage">
      </div>
      </div>
      </div>
      <HomeMiddle2/>
      <HomeMiddle3/>
    </div>
  )
}

export default FeedSectionHome

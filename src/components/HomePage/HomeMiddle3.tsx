import CommentSection from "./CommentSection"
import LikeFeedPost from "./LikeFeedPost"

const HomeMiddle3: React.FC<any> = (props) => {

    return (
        <div className="main-post-homepage">
            <div className="head-main-post-homepage">
                <div className="img-top">
                    <img className="img-top-homepage" src={props.logo} alt="img" />
                    <p>{props.logoheading}</p>
                    <button>...</button>
                </div>
            </div>
            <div className="head-text-homepage">
                <p>{props.description}</p>
                <p className="hash-tags">{props.Hashtags}</p>
            </div>
            <div>
                <img className="img-main-post" src={props.mainpost} />
            </div>
            <LikeFeedPost />
            <CommentSection />
        </div>
    )
}


// <!-- Scrollable modal -->
// <div className="modal-dialog modal-dialog-scrollable">
//   
// </div>
export default HomeMiddle3

import CommentSection from "./CommentSection"
import LikeFeedPost from "./LikeFeedPost"


const HomeMiddle3 = () => {
    return (
        <div className="main-post-homepage">
            <div className="head-main-post-homepage">
                <div className="img-top">
                    <img className="img-top-homepage" src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.18169-9/11796386_861196263934510_5473754141462954566_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1Ql8c3CVWEIAX9D4mey&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfA3zNENspLu2KyoM-epQbls1EnKrw8pMglvdCDhgd6xgw&oe=64B7BC13" alt="img" />
                    <p>Ahex Technologies</p>
                    <button>...</button>
                </div>
            </div>
            <div className="head-text-homepage">
                <p> Keep your mobile app running smoothly with this comprehensive guide. From regular updates and bug fixing to performance optimization, security enhancements, and user support, these maintenance practices ensure a seamless user experience. Stay ahead in the competitive mobile app landscape! 💪💡
                 <br/>To know more:<a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fahex.co%2Fa-complete-guide-to-mobile-app-maintenance%2F%3Ffbclid%3DIwAR3SWJ7N9_jYOWKNgWnGwCGUNISKVCaj9XDuvoQp7RxSJSsqybNNdUApmdE&h=AT2lLklt65sk5oas8XgdTlnHRvlWN0FO-ohQcMJpGmcgu0IEIk3h0lfEjhWHo6isJK65nSNZf5c85cvQ0pfX_gEfchxRXsa8slnz74yEAl0f59PacRqqFmMwE6iQyHSlUokA&__tn__=-UK-R&c[0]=AT1ca7BqB5799wzlpAa553uNy0Wmn9cAIudr4TixnRKvXu4ntieljmQtVurL6Cs4IvIMclIFxdAhMQuYoY7eV9mayfL0oZX4yjCued42YuR7iarko8DSklxD_bPwMDBb-j1BZbtqYY__Ln2IMw05JsZajnpfFew-EZv2aPZpBIybuRNX7i6PBOafiDMza3yvQlg2CNsBG0HCQQ" className="href-link"> https://ahex.co/a-complete-guide-to-mobile-app-maintenance/</a></p>
                 <p className="hash-tags">#MobileAppDevelopment #AppMaintenance #UserExperience #MobileApps</p>
            </div>
            <div>
                <img className="img-main-post" src="https://external.fhyd5-1.fna.fbcdn.net/emg1/v/t13/15427817665794984807?url=https%3A%2F%2Fahex.co%2Fwp-content%2Fuploads%2F2023%2F05%2Fapp-development-web-design-layered-user-interfaces-screens-touch-screen-smartphone_73903-464-1.jpg&fb_obo=1&utld=ahex.co&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75&ccb=13-1&oh=06_AbEr1rrR-rVBjAE-iq_BLiyyN4-R0_CTgLHPjMEtVDGFKw&oe=6491A7F7&_nc_sid=a0f537"/>
            </div>
            <LikeFeedPost/>
            <CommentSection/>
        </div>
    )
}

export default HomeMiddle3

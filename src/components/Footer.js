import twitter from "../images/Twitter.png"
import facebook from "../images/Facebook.png"
import instagram from "../images/Instagram.png"
import github from "../images/GitHub.png"

export default function Footer() {
    return(
        <footer>
        <div className="social_media">
            <a href="#"><img src={twitter}/></a>
            <a href="#"><img src={facebook}/></a>
            <a href="#"><img src={instagram}/></a>
            <a href="#"><img src={github}/></a>
        </div>
        </footer>
    )
}
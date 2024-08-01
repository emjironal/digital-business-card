import facebookIcon from "../../assets/Facebook-Icon.png";
import githubIcon from "../../assets/GitHub-Icon.png";
import instagramIcon from "../../assets/Instagram-Icon.png";
import twitterIcon from "../../assets/Twitter-Icon.png";
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer--container">
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="footer--icon" src={twitterIcon} />
            </a>
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="footer--icon" src={facebookIcon} />
            </a>
            <a
                href="https://www.instagram.com/eduardo.jiron.392"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="footer--icon" src={instagramIcon} />
            </a>
            <a
                href="https://github.com/emjironal"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="footer--icon" src={githubIcon} />
            </a>
        </div>
    );
}

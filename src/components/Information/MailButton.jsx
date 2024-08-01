import mailIcon from "../../assets/Mail.png";
import "./MailButton.css";

export default function MailButton() {
    return (
        <a className="mailbutton--email" href="mailto:emjironal@gmail.com">
            <img className="mailbutton--email-icon" src={mailIcon} />
            <p className="mailbutton--email-text">Email</p>
        </a>
    );
}

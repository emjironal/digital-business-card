import mailIcon from "../../assets/Mail.png";
import "./MailButton.css";

export default function MailButton() {
  return (
    <a className="email" href="mailto:emjironal@gmail.com">
      <img className="email-icon" src={mailIcon} />
      <p className="email-text">Email</p>
    </a>
  );
}

import "./Information.css";
import LinkedInButton from "./LinkedInButton";
import MailButton from "./MailButton";

export default function Information() {
  return (
    <div className="container">
      <img className="profile-image" />
      <h1 className="name">Eduardo Jirón</h1>
      <h4 className="position">Software Engineer</h4>
      <a
        className="website-link"
        href="https://github.com/emjironal"
        target="_blank"
        rel="noopener noreferrer"
      >
        Personal GitHub
      </a>
      <MailButton />
      <LinkedInButton />
    </div>
  );
}
import "./Information.css";
import LinkedInButton from "./LinkedInButton";
import MailButton from "./MailButton";

export default function Information() {
  return (
    <div className="information--container">
      <h1 className="information--name">Eduardo Jirón</h1>
      <h4 className="information--position">Software Engineer</h4>
      <a
        className="information--website-link"
        href="https://github.com/emjironal"
        target="_blank"
        rel="noopener noreferrer"
      >
        Personal GitHub
      </a>
      <div className="information--container-button">
        <MailButton />
        <LinkedInButton />
      </div>
    </div>
  );
}

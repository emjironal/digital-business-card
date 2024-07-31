import linkedinIcon from "../../assets/linkedin.png";
import "./LinkedInButton.css"

export default function LinkedInButton() {
  return (
    <a
      href="https://www.linkedin.com/in/eduardo-jiron"
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin"
    >
      <img className="linkedin-icon" src={linkedinIcon} />
      <p className="linkedin-text">LinkedIn</p>
    </a>
  );
}

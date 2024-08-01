import linkedinIcon from "../../assets/linkedin.png";
import "./LinkedInButton.css"

export default function LinkedInButton() {
  return (
    <a
      href="https://www.linkedin.com/in/eduardo-jiron"
      target="_blank"
      rel="noopener noreferrer"
      className="linkedinbutton--linkedin"
    >
      <img className="linkedinbutton--icon" src={linkedinIcon} />
      <p className="linkedinbutton--text">LinkedIn</p>
    </a>
  );
}

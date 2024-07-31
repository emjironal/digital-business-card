import linkedinIcon from "../../assets/linkedin.png";

export default function LinkedInButton() {
  return (
    <a
      href="https://www.linkedin.com/in/eduardo-jiron"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="linkedin">
        <img className="linkedin-icon" src={linkedinIcon} />
        <p>LinkedIn</p>
      </button>
    </a>
  );
}

import mailIcon from "../../assets/Mail.png";

export default function MailButton() {
  return (
    <a href="mailto:emjironal@gmail.com">
      <button className="email">
        <img className="email-icon" src={mailIcon} />
        <p>Email</p>
      </button>
    </a>
  );
}

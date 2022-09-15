import iconEmail from "../images/IconEmail.png";
import iconLinkedIn from "../images/IconLinkedIn.png";

export default function Main() {
  return (
    <main>
      <div className="info_contact">
        <div className="info">
          <h1>Laura Smith</h1>
          <h3>Frontend Developer</h3>
          <a href="#">laurasmith.website</a>
        </div>

        <div className="contact">
          <button className="btn1">
            <img src={iconEmail} /> Email
          </button>
          <button className="btn2">
            <img src={iconLinkedIn} /> LinkedIn
          </button>
        </div>
      </div>

      <div className="about">
        <h2>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>

      <div className="interests">
        <h2>Interests</h2>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </main>
  );
}

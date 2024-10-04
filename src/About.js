import './About.css'; // Link to your CSS file

const About = () => {
  const email = 'ismailhm888@gmail.com';

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p className="about-text">
        Hi 👋, I'm <strong>Ismail Halliru Muhammad</strong><br />
        Web Developer & Designer. <br /><br />
        I have a passion for programming, and I've gained experience in JavaScript, React, HTML5, and CSS3. 
        I'm a certified Frontend Web Developer with knowledge in MySQL and PostgreSQL. I can help you build and maintain dynamic web apps.<br /><br />

        🌍 I'm based in <strong>Kano, Nigeria</strong> <br />
        ✉️ You can contact me at <strong>{email}</strong> <br />
        🧠 I have experience in React, JavaScript, HTML/CSS, and PostgreSQL. <br />
        🤝 I'm open to collaborating on any interesting project. <br />
        ⚡ I'm also open to internships and job offers.
      </p>

      <a className="email-link" href={`mailto:${email}`}>Send email</a>
    </div>
  );
}

export default About;

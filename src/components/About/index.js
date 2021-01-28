import './about.css';

function About() {
  return (
    <section id="about" className="app-about">
      <h2 className="app-section-heading">ABOUT ME</h2>
      <div className="app-about-info">
        <div className="app-about--info-content">
          <p>
            Hello, my name is Karen Cumlat and I am a digital artist and front
            end developer based in Vancouver.
          </p>

          <div className="app-contact">
            <a href="mailto:karencumlat@gmail.com" className="say-hello">
              Say hello
            </a>{' '}
            or checkout my{' '}
            <a
              href="https://karencumlat.ca/files/Karen_Cumlat_Resume.pdf"
              className="resume"
            >
              Resume
            </a>
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + '/images/karen.jpg'}
          alt="Karen Cumlat"
          className="app-about-image"
        />
      </div>
    </section>
  );
}

export default About;

import './about.css';

function About() {
  return (
    <section id="about" className="app-about">
      <div className="app-about-info">
        <div className="app-about--info-content">
          <p>
            I am a digital artist and front end developer. I currently live in
            North Vancouver, BC and am searching for new work opportunities.
          </p>
          <div className="app-about-resume">
            <span id="resumé">brief resumé</span>
            <hr />
            <ul>
              <li>Independent Artist Aug 2015-present</li>
              <li>Marker @ BCIT Nov 2020-May 2021</li>
              <li>UX Developer @ Galvanize Mar-Oct 2020</li>
              <li>Digital Design & Development @ BCIT Sept 2018-May 2020</li>
            </ul>
          </div>
          <div className="app-contact">
            <a href="mailto:karencumlat@gmail.com" className="say-hello">
              Say hello
            </a>{' '}
            or checkout my{' '}
            <a
              href="https://drive.google.com/file/d/100TinDIhxfE3Ne3t5aytsy0JRo94SGak/view?usp=sharing"
              className="resume"
            >
              Resumé
            </a>
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + '/images/karen.jpg'}
          alt="Karen Cumlat"
          className="app-about-image"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default About;

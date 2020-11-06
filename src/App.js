import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";
import "./helpers/fontawesome";
import { featureWork, otherWork } from "./helpers/data";

function renderSocialLinks() {
  return (
    <div className="app-social-links">
      <a
        className="app-social-links--item"
        href="https://www.behance.net/karencumlat"
      >
        Behance
      </a>
      <a
        className="app-social-links--item"
        href="https://github.com/karencumlat"
      >
        GitHub
      </a>
      <a
        className="app-social-links--item"
        href="https://ca.linkedin.com/in/karencumlat"
      >
        LinkedIn
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-header--heading">
          <a href="https://karencumlat.ca/">
            Karen Cumlat — Digital Artist & Front End Developer
          </a>
        </h1>

        <nav className="app-nav">
          <a className="app-nav--item" href="#about">
            About
          </a>
          <a className="app-nav--item" href="#work">
            Work
          </a>
          <a
            className="app-nav--item"
            href="https://karencumlat.ca/files/Karen_Cumlat_Resume.pdf"
          >
            Resume
          </a>
          <a
            className="app-nav--item say-hello"
            href="mailto:karencumlat@gmail.com"
          >
            Say Hello
          </a>
        </nav>
      </header>
      <main className="app-main">
        <span className="semi-bold"> Hi, I'm Karen.</span>
        <span className="app-main--description">
          My goal is to be a{" "}
          <span className="semi-bold blue-box-shadow">queen of one trade</span>,
          but for now, I'm like the Jack of all trades.
        </span>
        <span className="halant">{renderSocialLinks()}</span>
      </main>
      <section id="about">
        <h2 className="app-section-heading">ABOUT ME</h2>
        <div className="app-about">
          <div className="app-about-info">
            <p>
              Hello, my name is Karen Cumlat and I am a digital artist and front
              end developer based in Vancouver.
            </p>

            <p>
              Oh! In my spare time I talk to my cat or Netflix binge-watching .
            </p>
            <p>✖ ✖ ✖ ✖ ✖ ✖ ✖ ✖ ✖ ✖ ✖ ✖ ✖ ✖ ✖ ✖ ✖ ✖ </p>
            <p>Get in touch: karencumlat@gmail.com</p>
          </div>
          <img
            src="https://placeimg.com/300/300/any"
            alt="Karen Cumlat"
            className="app-about-image"
          />
        </div>
      </section>
      <section id="app-feature-work">
        <h2 className="app-section-heading">FEATURE WORK</h2>
        {featureWork.map((feat) => {
          return (
            <div className="app-feature-work--item">
              <img src="https://placeimg.com/500/300/any" alt={feat.tag} />
              <div className="app-feature-work--item-info">
                <p className="app-feature-work--item-info--role">{feat.role}</p>
                <h3 className="halant app-feature-work--item-info--title">
                  {feat.name}
                </h3>
                <p>{feat.description}</p>
                <ul className="app-feature-work--item-info--tech">
                  {feat.tech.map((tech) => {
                    return <li>{tech}</li>;
                  })}{" "}
                </ul>
                <ul className="app-feature-work--item-info--links">
                  <li>
                    <a href={feat.github}>
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                  </li>
                  <li>
                    <a href={feat.link}>
                      <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </section>
      <section className="app-other-work">
        <h2 className="app-section-heading">OTHER WORK</h2>
        <div className="app-card-group">
          {otherWork.map((other) => {
            const imgUrl = `/images/${other.tag}.png`;
            return (
              <div className="app-card">
                <img src={process.env.PUBLIC_URL + imgUrl} alt={other.tag} />
              </div>
            );
          })}
        </div>
      </section>
      <section className="app-contact">
        <a href="mailto:karencumlat@gmail.com" className="say-hello">
          Say Hello
        </a>{" "}
        or checkout my{" "}
        <a href="https://karencumlat.ca/files/Karen_Cumlat_Resume.pdf">
          Resume
        </a>
      </section>
      <footer>{renderSocialLinks()}</footer>
    </div>
  );
}

export default App;

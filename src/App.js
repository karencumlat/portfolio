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
        aria-label="Behance"
      >
        <FontAwesomeIcon icon={["fab", "behance"]} />
      </a>
      <a
        className="app-social-links--item"
        href="https://github.com/karencumlat"
        aria-label="Github"
      >
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a
        className="app-social-links--item"
        href="https://ca.linkedin.com/in/karencumlat"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
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
          <a className="app-nav--item" href="#app-work">
            work
          </a>
          <a className="app-nav--item" href="#app-about">
            about
          </a>
          <a
            className="app-nav--item"
            href="https://karencumlat.ca/files/Karen_Cumlat_Resume.pdf"
          >
            resume
          </a>
          <a className="app-nav--item" href="mailto:karencumlat@gmail.com">
            say hello
          </a>
        </nav>
      </header>
      <main className="app-main">
        <span className="semi-bold"> Hi, I'm Karen.</span>
        <span className="app-main--description">
          My goal is to be a{" "}
          <span className="semi-bold queen">queen of one trade</span>, but for
          now, I'm like the Jack of all trades.
        </span>
        <span className="app-main--social-links">{renderSocialLinks()}</span>
      </main>
      <section id="app-work" className="app-feature-work">
        <h2 className="app-section-heading">FEATURE WORK</h2>
        {featureWork.map((feat) => {
          return (
            <div className="app-feature-work--item">
              <img
                className="app-feature-work--image"
                src={process.env.PUBLIC_URL + "/images/" + feat.tag + ".jpg"}
                alt={feat.alt}
              />
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
                    <a href={feat.github} aria-label="GitHub">
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                  </li>
                  <li>
                    <a href={feat.link} aria-label={`View ${feat.name}`}>
                      <FontAwesomeIcon
                        icon={["fas", "external-link-alt"]}
                        role="img"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </section>
      <section className="app-other--work">
        <h2 className="app-section-heading">OTHER WORK</h2>
        <div className="app-card-group">
          {otherWork.map((other) => {
            const imgUrl = `/images/${other.tag}.jpg`;
            return (
              <div className="app-card">
                <img
                  src={process.env.PUBLIC_URL + imgUrl}
                  alt={other.tag}
                  className="app-card--image"
                />
                {other.tag === "dailyillustration" ? (
                  <span className="app-card--title">
                    {other.name} on <a href="Redbubble.com">{other.type}</a>
                  </span>
                ) : (
                  <span className="app-card--title">
                    {other.name} - {other.year} - {other.type}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section id="app-about">
        <h2 className="app-section-heading">ABOUT ME</h2>
        <div className="app-about">
          <div className="app-about--info">
            <p>
              Hello, my name is Karen Cumlat and I am a digital artist and front
              end developer based in Vancouver.
            </p>

            <p>
              Oh! In my spare time I talk to my cat or Netflix binge-watching .
            </p>

            <div className="app-contact">
              <a href="mailto:karencumlat@gmail.com" className="say-hello">
                Say hello
              </a>{" "}
              or checkout my{" "}
              <a
                href="https://karencumlat.ca/files/Karen_Cumlat_Resume.pdf"
                className="resume"
              >
                Resume
              </a>
            </div>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/images/karen.jpg"}
            alt="Karen Cumlat"
            className="app-about-image"
          />
        </div>
      </section>
      <footer>{renderSocialLinks()}</footer>
    </div>
  );
}

export default App;

import React from "react";

import SocialLinks from "./components/SocialLinks";
import FeatureWork from "./components/FeatureWork";
import WorkCard from "./components/WorkCard";

import "./App.css";
import "./helpers/fontawesome";
import { featureWork, otherWork } from "./helpers/data";

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
        <span className="app-main--social-links">{<SocialLinks />}</span>
      </main>
      <section id="app-work" className="app-feature-work">
        <h2 className="app-section-heading">FEATURE WORK</h2>
        {featureWork.map((feat) => {
          const imgUrl = `/images/${feat.tag}.jpg`;
          return (
            <FeatureWork
              url={imgUrl}
              alt={feat.alt}
              role={feat.role}
              name={feat.name}
              description={feat.description}
              tech={feat.tech}
            />
          );
        })}
      </section>
      <section className="app-other--work">
        <h2 className="app-section-heading">OTHER WORK</h2>
        <div className="app-card-group">
          {otherWork.map((other) => {
            const imgUrl = `/images/${other.tag}.jpg`;
            return (
              <WorkCard
                url={imgUrl}
                alt={other.tag}
                tag={other.tag}
                name={other.name}
                year={other.year}
                type={other.type}
              />
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
      <footer>{<SocialLinks />}</footer>
    </div>
  );
}

export default App;

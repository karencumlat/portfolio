import React from 'react';

import About from './components/About';
import FeatureWork from './components/FeatureWork';
import Header from './components/Header';
import Main from './components/Main';
import SocialLinks from './components/SocialLinks';
import WorkCard from './components/WorkCard';

import './App.css';
import './helpers/fontawesome';
import { featureWork, otherWork } from './helpers/data';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <section id="web" className="app-feature-work">
        <h2 className="app-section-heading">WEB PROJECT</h2>
        {featureWork.map((feat) => {
          const imgUrl = `/images/${feat.tag}.jpg`;
          return (
            <FeatureWork
              key={feat.name}
              url={imgUrl}
              alt={feat.alt}
              role={feat.role}
              name={feat.name}
              description={feat.description}
              tech={feat.tech}
              github={feat.github}
              link={feat.link}
            />
          );
        })}
      </section>
      <section className="app-other--work" id="design">
        <h2 className="app-section-heading">DESIGN PROJECT</h2>
        <div className="app-card-group">
          {otherWork.map((other) => {
            const imgUrl = `/images/${other.tag}.jpg`;
            return (
              <WorkCard
                key={other.tag}
                url={imgUrl}
                alt={`${other.name} ${other.type}`}
                tag={other.tag}
                name={other.name}
                year={other.year}
                type={other.type}
                link={other.url}
              />
            );
          })}
        </div>
      </section>
      <About />
      <footer>{<SocialLinks />}</footer>
    </div>
  );
}

export default App;

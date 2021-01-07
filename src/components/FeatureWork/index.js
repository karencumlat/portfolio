import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './featureWork.css';

function FeatureWork(props) {
  return (
    <div className="app-feature-work--item">
      <a href={props.link} className="app-feature-work--link" title={props.alt}>
        <img
          className="app-feature-work--image"
          src={props.url}
          alt={props.alt}
        />
        <div class="overlay"></div>
      </a>
      <div className="app-feature-work--item-info">
        <p className="app-feature-work--item-info--role">{props.role}</p>
        <h3 className="halant app-feature-work--item-info--title">
          {props.name}
        </h3>
        <p>{props.description}</p>
        <ul className="app-feature-work--item-info--tech">
          {props.tech.map((tech) => {
            return <li>{tech}</li>;
          })}{' '}
        </ul>
        <ul className="app-feature-work--item-info--links">
          <li>
            <a href={props.github} aria-label="GitHub">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </li>
          <li>
            <a href={props.link} aria-label={`View ${props.name}`}>
              <FontAwesomeIcon icon={['fas', 'external-link-alt']} role="img" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeatureWork;

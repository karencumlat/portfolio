import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './archive.css';

function Archive(props) {
  return (
    <tr>
      <td>{props.year}</td>
      <td>{props.title}</td>
      <td className="hide-on-small">{props.made}</td>
      <td className="hide-on-small">{props.built}</td>
      <td>
        {props.link && (
          <a href={props.link} aria-label={`View ${props.title}`}>
            <FontAwesomeIcon icon={['fas', 'external-link-alt']} role="img" />
          </a>
        )}
        {props.github && (
          <a href={props.github} aria-label={`View ${props.title}`}>
            <FontAwesomeIcon icon={['fab', 'github']} role="img" />
          </a>
        )}
      </td>
    </tr>
  );
}
export default Archive;

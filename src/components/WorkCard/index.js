import './workCard.css';

function WorkCard(props) {
  return (
    <div className="app-card">
      <a href={props.link} title={props.alt}>
        <img
          src={process.env.PUBLIC_URL + props.url}
          alt={props.alt}
          className="app-card--image"
          loading="lazy"
        />
      </a>
      {props.link.includes('behance') ? (
        <span className="app-card--title">
          <a href={props.link}>{props.name}</a> - {props.year} - {props.type}
        </span>
      ) : (
        <span className="app-card--title">
          {props.name} <a href={props.link}>{props.type}</a>
        </span>
      )}
    </div>
  );
}

export default WorkCard;

import './workCard.css';

function WorkCard(props) {
  return (
    <div className="app-card">
      <img
        src={process.env.PUBLIC_URL + props.url}
        alt={props.alt}
        className="app-card--image"
        loading="lazy"
      />
      {props.link !== '' ? (
        <span className="app-card--title">
          {props.name} <a href={props.link}>{props.type}</a>
        </span>
      ) : (
        <span className="app-card--title">
          {props.name} - {props.year} - {props.type}
        </span>
      )}
    </div>
  );
}

export default WorkCard;

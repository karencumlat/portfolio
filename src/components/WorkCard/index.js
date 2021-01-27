import './workCard.css';

function WorkCard(props) {
  return (
    <div className="app-card">
      <img src={props.url} alt={props.alt} className="app-card--image" />
      {props.tag === 'dailyillustration' ? (
        <span className="app-card--title">
          {props.name} on{' '}
          <a href="https://www.redbubble.com/people/karencumlat/shop">
            {props.type}
          </a>
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

import WorkCard from '../../components/WorkCard';
import { otherWork } from '../../helpers/data';

import './design.css';

function Design() {
  return (
    <section className="app-other--work" id="design">
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
  );
}

export default Design;

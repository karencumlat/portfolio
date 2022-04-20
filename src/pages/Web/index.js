import FeatureWork from '../../components/FeatureWork';
import { featureWork } from '../../helpers/data';
function Web() {
  return (
    <section id="web" className="app-feature-work">
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
  );
}

export default Web;

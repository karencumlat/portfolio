import Archive from '../../components/Archive';
import { archiveData } from '../../helpers/archiveData';
import './archives.css';
function Archives() {
  return (
    <>
      <table className="archive">
        <thead>
          <tr>
            <td>Year</td>
            <td>Title</td>
            <td className="hide-on-small">Made at</td>
            <td className="hide-on-small">Built with</td>
            <td>Link</td>
          </tr>
        </thead>
        <tbody>
          {archiveData.map((data) => {
            return (
              <Archive
                year={data.year}
                title={data.title}
                made={data.made}
                built={data.built}
                link={data.link}
                github={data.github}
                key={data.title}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Archives;

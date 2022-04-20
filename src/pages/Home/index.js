import './home.css';

function Home() {
  return (
    <main className="app-main">
      <span className="app-main--name semi-bold"> Hi, my name is Karen.</span>
      <span className="app-main--description">
        My goal is to be a{' '}
        <span className="semi-bold queen">queen of one trade</span>, but for
        now, I'm like the Jill of all trades.
      </span>
      <img
        src={process.env.PUBLIC_URL + '/images/karen.jpg'}
        alt="Karen Cumlat"
        className="app-home-image"
        loading="lazy"
      />
    </main>
  );
}

export default Home;

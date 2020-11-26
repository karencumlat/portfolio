import SocialLinks from "../SocialLinks";

import "./main.css";

function Main() {
  return (
    <main className="app-main">
      <span className="semi-bold"> Hi, I'm Karen.</span>
      <span className="app-main--description">
        My goal is to be a{" "}
        <span className="semi-bold queen">queen of one trade</span>, but for
        now, I'm like the Jack of all trades.
      </span>
      <span className="app-main--social-links">{<SocialLinks />}</span>
    </main>
  );
}

export default Main;

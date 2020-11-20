import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./socialLinks.css";

function SocialLinks() {
  return (
    <div className="app-social-links">
      <a
        className="app-social-links--item"
        href="https://www.behance.net/karencumlat"
        aria-label="Behance"
      >
        <FontAwesomeIcon icon={["fab", "behance"]} />
      </a>
      <a
        className="app-social-links--item"
        href="https://github.com/karencumlat"
        aria-label="Github"
      >
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a
        className="app-social-links--item"
        href="https://ca.linkedin.com/in/karencumlat"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
      </a>
    </div>
  );
}

export default SocialLinks;

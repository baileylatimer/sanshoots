import React from "react";
import { Link } from "gatsby";

// Assuming RedDot is in the same file, otherwise import it
const RedDot = () => (
  <svg className="red-dot" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.2603" cy="11.5" r="6.5" fill="#FF0B0B"/>
  </svg>
);

const Btn = ({ link, type, text }) => {
  return (
    <div className={"btn relative " + type}>
      <Link to={link}>

        {text}
        <RedDot /> {/* Position the red dot as needed, e.g., next to the text or as a background */}
      </Link>
    </div>
  );
};

export default Btn;

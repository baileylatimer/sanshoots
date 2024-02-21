import React from "react"
import { Link } from "gatsby"

const Btn  = ({ link, type, text  }) => {
  return (
  
<div className={"btn relative " + type}>
  <Link to={link}>{text}</Link>



</div>
);
};

export default Btn
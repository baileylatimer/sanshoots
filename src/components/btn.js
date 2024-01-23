import React from "react"
import { Link } from "gatsby"

const Btn  = ({ link, type, text  }) => {
  return (
  
<div className={"btn relative" + type}>
  <Link to={link}>{text}</Link>
  <svg  className="btn-bg" width="212" height="64" viewBox="0 0 212 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 53.0001V10.0927C1 5.43916 4.77241 1.66675 9.42592 1.66675H186.907C189.671 1.66675 192.293 2.89197 194.066 5.01231L208.826 22.6601C210.231 24.3393 211 26.4587 211 28.6478V53.0001C211 58.1547 206.821 62.3334 201.667 62.3334H10.3333C5.17868 62.3334 1 58.1547 1 53.0001Z" stroke="#EDEAE4" stroke-width="1.55556"/>
</svg>


</div>
);
};

export default Btn
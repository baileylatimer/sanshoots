import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"




const TextCard = props => (
  
  <div className="flex flex-col lg:flex-row">
  <div className="text-card px-4 pt-4 pb-24 lg:pb-40">
    <h2 className="text-indent">{props.text}</h2>
    <svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" role="presentation" class="blurb__svg"><path d="M0 0h33v33H0V0Z"></path></svg>
  </div>
</div>
);

export default TextCard
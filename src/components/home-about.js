import React from "react"

import { gsap } from "gsap";
    
import { Draggable } from "gsap/Draggable";



const HomeAbout = props => (
  
<div class="home-about py-20 mx-d flex justify-end">
  <div className="content">
<h2 className="text-indent">STUDIO-RO is an award-winning dance practice working across a mix of disciplines that includes heels & hip hop.</h2>
<svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" role="presentation" class="blurb__svg"><path d="M0 0h33v33H0V0Z"></path></svg>
</div>
</div>
);
 
gsap.registerPlugin(Draggable);
Draggable.create(".content");

export default HomeAbout
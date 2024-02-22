


import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Btn from "./btn"
import gsap from "gsap";
// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

// gsap.registerPlugin(ScrambleTextPlugin);


function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  /*
  useEffect(() => {
    // Select all <a> tags within the <nav>
    const links = document.querySelectorAll("nav a");
  
    links.forEach((link) => {
      // Check if the link or its parents have excluded classes
      if (link.classList.contains('logo-wrapper') || link.closest('.btn')) {
        // Skip this link if it matches the excluded criteria
        return;
      }
  
      const originalText = link.textContent; // Store the original text
  
      // Hover in
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          duration: 0.5,
          scrambleText: {
            text: originalText,
            chars: "upperCase",
            revealDelay: 0.5,
          },
        });
      });
  
      // Hover out
      link.addEventListener("mouseleave", () => {
        // Immediately revert to the original text without waiting for the animation to complete
        gsap.to(link, {
          duration: 0.1, // Short duration for immediate effect
          scrambleText: {
            text: originalText,
            chars: "upperCase",
            revealDelay: 0,
          },
        });
      });
    });
  }, []);
*/

  return (
    <nav className="flex flex-wrap items-center justify-between py-3 lg:p-6 mx-d mb-6 px-d z-50">
         <div className="flex items-center text-white  px-d">
      <Link
            to={`/`}
            className="logo-wrapper mb-0"
          >
<svg className="nav-logo" width="114" height="44" viewBox="0 0 114 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M103.707 14.0878C102.964 11.8597 102.752 10.2682 102.752 7.98711V5.81206C102.752 1.99248 104.715 0.135742 107.951 0.135742C111.187 0.135742 113.15 1.99248 113.15 5.81206C113.15 10.2682 111.664 13.186 109.648 15.4671V5.44072C109.648 4.00837 109.012 3.21263 107.951 3.21263C106.89 3.21263 106.253 4.00837 106.253 5.44072V7.93406C106.253 10.2152 106.572 11.8067 107.314 14.0348L112.195 28.7826C112.938 31.0107 113.15 32.6022 113.15 34.8833V37.748C113.15 41.5676 111.187 43.4243 107.951 43.4243C104.715 43.4243 102.752 41.5676 102.752 37.748C102.752 33.2918 104.237 30.3741 106.253 28.093V38.1194C106.253 39.5517 106.89 40.3475 107.951 40.3475C109.012 40.3475 109.648 39.5517 109.648 38.1194V34.9364C109.648 32.6552 109.33 31.0637 108.587 28.8357L103.707 14.0878Z" fill="#EDEAE4"/>
<path d="M90.7192 3.74329V0.560303H101.647V3.74329H97.7749V3.84939C97.881 4.85733 97.934 5.70613 97.934 6.97932V39.7641C97.934 41.0373 97.9871 41.8861 98.0932 42.894V43.0001H94.2736V42.894C94.3797 41.8861 94.4327 41.0373 94.4327 39.7641V6.97932C94.4327 5.70613 94.4858 4.85733 94.5919 3.84939V3.74329H90.7192Z" fill="#EDEAE4"/>
<path d="M84.131 43.4243C80.895 43.4243 78.9321 41.5676 78.9321 37.748V5.81206C78.9321 1.99248 80.895 0.135742 84.131 0.135742C87.367 0.135742 89.3299 1.99248 89.3299 5.81206V37.748C89.3299 41.5676 87.367 43.4243 84.131 43.4243ZM82.4334 38.1194C82.4334 39.5517 83.1231 40.3475 84.131 40.3475C85.192 40.3475 85.8286 39.5517 85.8286 38.1194V5.44072C85.8286 4.00837 85.192 3.21263 84.131 3.21263C83.1231 3.21263 82.4334 4.00837 82.4334 5.44072V38.1194Z" fill="#EDEAE4"/>
<path d="M71.0758 43.4243C67.8398 43.4243 65.877 41.5676 65.877 37.748V5.81206C65.877 1.99248 67.8398 0.135742 71.0758 0.135742C74.3119 0.135742 76.2747 1.99248 76.2747 5.81206V37.748C76.2747 41.5676 74.3119 43.4243 71.0758 43.4243ZM69.3782 38.1194C69.3782 39.5517 70.0679 40.3475 71.0758 40.3475C72.1368 40.3475 72.7734 39.5517 72.7734 38.1194V5.44072C72.7734 4.00837 72.1368 3.21263 71.0758 3.21263C70.0679 3.21263 69.3782 4.00837 69.3782 5.44072V38.1194Z" fill="#EDEAE4"/>
<path d="M52.6245 3.79634C52.6245 2.52314 52.5714 1.67435 52.4653 0.666401V0.560303H56.2849V0.666401C56.1788 1.67435 56.1258 2.52314 56.1258 3.79634V39.7641C56.1258 41.0373 56.1788 41.8861 56.2849 42.894V43.0001H52.4653V42.894C52.5714 41.8861 52.6245 41.0373 52.6245 39.7641V3.79634ZM56.4971 18.0137L59.3088 15.2551V3.79634C59.3088 2.52314 59.2557 1.67435 59.1496 0.666401V0.560303H62.9692V0.666401C62.8631 1.67435 62.81 2.52314 62.81 3.79634V39.7641C62.81 41.0373 62.8631 41.8861 62.9692 42.894V43.0001H59.1496V42.894C59.2557 41.8861 59.3088 41.0373 59.3088 39.7641V20.454C59.3088 18.4381 58.7252 18.0137 57.1337 18.0137H56.4971Z" fill="#EDEAE4"/>
<path d="M40.6068 14.0878C39.8641 11.8597 39.6519 10.2682 39.6519 7.98711V5.81206C39.6519 1.99248 41.6147 0.135742 44.8507 0.135742C48.0868 0.135742 50.0496 1.99248 50.0496 5.81206C50.0496 10.2682 48.5642 13.186 46.5483 15.4671V5.44072C46.5483 4.00837 45.9117 3.21263 44.8507 3.21263C43.7897 3.21263 43.1531 4.00837 43.1531 5.44072V7.93406C43.1531 10.2152 43.4714 11.8067 44.2141 14.0348L49.0947 28.7826C49.8374 31.0107 50.0496 32.6022 50.0496 34.8833V37.748C50.0496 41.5676 48.0868 43.4243 44.8507 43.4243C41.6147 43.4243 39.6519 41.5676 39.6519 37.748C39.6519 33.2918 41.1372 30.3741 43.1531 28.093V38.1194C43.1531 39.5517 43.7897 40.3475 44.8507 40.3475C45.9117 40.3475 46.5483 39.5517 46.5483 38.1194V34.9364C46.5483 32.6552 46.23 31.0637 45.4873 28.8357L40.6068 14.0878Z" fill="#EDEAE4"/>
<path d="M26.762 43.0001V42.894C26.8681 41.8861 26.9212 41.0373 26.9212 39.7641V4.91039C26.9212 2.73535 26.8151 1.46216 26.1785 0.666413V0.560315H29.7328C30.4224 1.35606 30.4224 2.62925 30.4224 4.91039V39.7641C30.4224 41.0373 30.4755 41.8861 30.5816 42.894V43.0001H26.762ZM30.7407 3.1067L33.7115 0.188965C36.1518 0.666413 37.1067 1.67436 37.1067 5.54699L37.0537 38.65C37.0537 40.8251 37.1598 42.0983 37.7964 42.894V43.0001H34.242C33.5524 42.2044 33.5524 40.9312 33.5524 38.65V5.54699C33.5524 3.5311 32.9688 3.1067 31.3773 3.1067H30.7407Z" fill="#EDEAE4"/>
<path d="M13.6119 43.0001V42.894C13.718 41.8861 13.771 41.0373 13.771 39.7641V4.91039C13.771 2.73535 13.6649 1.46216 13.0283 0.666413V0.560315H16.5827C17.2723 1.35606 17.2723 2.62925 17.2723 4.91039V39.7641C17.2723 41.0373 17.3253 41.8861 17.4314 42.894V43.0001H13.6119ZM17.5906 3.1067L20.5614 0.188965C23.0017 0.666413 23.9566 1.67436 23.9566 5.54699V19.2869V20.2418L23.9035 38.65C23.9035 40.8251 24.0096 42.0983 24.6462 42.894V43.0001H21.0919C20.4022 42.2044 20.4022 40.9312 20.4022 38.65V19.3399C20.2431 18.1198 19.6065 17.8015 18.2802 17.8015H17.6436L20.4022 15.0959V5.54699C20.4022 3.5311 19.8187 3.1067 18.2272 3.1067H17.5906Z" fill="#EDEAE4"/>
<path d="M1.80377 14.0878C1.06108 11.8597 0.848877 10.2682 0.848877 7.98711V5.81206C0.848877 1.99248 2.81172 0.135742 6.04775 0.135742C9.28379 0.135742 11.2466 1.99248 11.2466 5.81206C11.2466 10.2682 9.76124 13.186 7.74534 15.4671V5.44072C7.74534 4.00837 7.10875 3.21263 6.04775 3.21263C4.98676 3.21263 4.35016 4.00837 4.35016 5.44072V7.93406C4.35016 10.2152 4.66846 11.8067 5.41116 14.0348L10.2917 28.7826C11.0344 31.0107 11.2466 32.6022 11.2466 34.8833V37.748C11.2466 41.5676 9.28379 43.4243 6.04775 43.4243C2.81172 43.4243 0.848877 41.5676 0.848877 37.748C0.848877 33.2918 2.33427 30.3741 4.35016 28.093V38.1194C4.35016 39.5517 4.98676 40.3475 6.04775 40.3475C7.10875 40.3475 7.74534 39.5517 7.74534 38.1194V34.9364C7.74534 32.6552 7.42705 31.0637 6.68435 28.8357L1.80377 14.0878Z" fill="#EDEAE4"/>
</svg>


      </Link>

      </div>
      <div className="block lg:hidden ">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center py-2 "
        >
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="9" width="25" height="2" fill="var(--color-bg)"/>
<rect x="1" y="17" width="25" height="2" fill="var(--color-bg)"/>
</svg>



        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full nav-open block lg:flex lg:items-center lg:w-auto mt-4 pt-4 lg:mt-0 lg:pt-0  `}
      >
        <div className="text-sm">
          <Link
            to={`/showreel`}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 "
          >
            Showreel
          </Link>
          <Link
            to={`/shortfilms`}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 "
          >
            Shortfilms
          </Link>

          <Link
            to={`/contact`}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 "
          >
            Transitions
          </Link>

          <Link
            to={`/about`}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 "
          >
            About
          </Link>

       
        </div>

        <div className="flex flex-col mobile pt-64">
          <Btn link="/contact" text="Get in touch" type=" btn--ghost mobile"/>
          <p className="color-bg my-8">SANSHOOTS® is an award-winning videography studio founded by Hassan Musa based in Los Angeles, CA.</p>
          <p className="color-bg">©2024</p>
        </div>
        
        <div>
        </div>
      </div>
   
      <Btn link="/contact" text="Get in touch" type=" btn--ghost desktop "/>
      
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

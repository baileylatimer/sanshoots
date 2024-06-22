import React, { useState, useEffect } from "react";

const Target = props => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex w-full justify-center px-d mt-36">
      <div className="content px-d relative flex flex-col lg:block" style={{
        backgroundImage: isMobile ? `url(${props.coverMobile})` : `url(${props.cover})`
      }}>
  
      <div className="flex flex-col lg:w-2/5 target-copy-1 lg:mt-0">
        <h5>About Hassan Musa</h5>
        <p>We are about as creatively daring as we are organized. In fact, we believe the best work comes from thinking big, and then giving it boundaries. Our expertise is finely-honed video production skills. But we back it up with fresh ideas, in-depth strategy, and seamless client services.</p>
      </div>
      <div className="flex flex-col lg:w-2/5 target-copy-2 mt-6 lg:mt-0">
        <p>which allows us to turn on a dime depending on the size and scale of different projects. After decades of working with Fortune 1000 clients on everything from episodic series.</p>
      </div>
  
      </div>
    </div>
  );
};

export default Target;

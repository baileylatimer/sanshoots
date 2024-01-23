import React from "react"

const Stripes = () => {
  return (
    <div className="mt-20 pb-40 lg:pb-64 bg-inverse" aria-hidden="true">
      <div style={{ marginTop: "-23px" }}>
        {[...Array(24)].map((_, index) => (
          <div
            key={index}
            className="bg-primary"
            style={{ marginTop: `${index}px`, height: `${23 - index}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Stripes;

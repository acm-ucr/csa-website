import React from "react";

const Heading = ({ title }) => {
  return (
    <p className="pr-6 text-right font-serif text-3xl font-semibold text-csa-red-100">
      {title}
    </p>
  );
};

export default Heading;

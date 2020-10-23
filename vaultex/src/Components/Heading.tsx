import React from "react";

const Heading = ({ value }: IHeadingProps) => {
  return <h1>{value}</h1>;
};

interface IHeadingProps {
  value: string;
}

export default Heading;

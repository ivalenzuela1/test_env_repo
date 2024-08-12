import React from "react";

const EnvironmentComponent = () => {
  const ENV = process.env.NEXT_PUBLIC_ENVIRONMENT as string;
  return <div>Environment: {ENV}</div>;
};

export default EnvironmentComponent;

import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="bg-white rounded-lg shadow-md p-6">{children}</div>;
};

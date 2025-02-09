import React from "react";

type ButtonGroupProps = {
  children: React.ReactNode;
  alignment?: "left" | "center" | "right";
  direction?: "row" | "column";
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  alignment = "center",
  direction = "column",
}) => {
  const alignmentClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const directionClass = {
    row: "flex-row",
    column: "flex-col",
  };

  return (
    <div
      className={`flex gap-2 ${alignmentClass[alignment]} ${directionClass[direction]}`}
    >
      {children}
    </div>
  );
};

import React, { FC } from "react";

interface ButtonProps {}

const Button: FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;

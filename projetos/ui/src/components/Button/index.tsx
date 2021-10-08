import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return <button> - Ui - {children}</button>;
};

export default Button;

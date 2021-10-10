import React from "react";

interface ButtonProps {
  /**
   * Essa prop usa o disabled padrão do html e aplica um css junto
   */
  disabled?: boolean;
  /**
   * Passa via children o que deseja renderizar dentro do botão 
   */
  children: React.ReactNode
 
};

const Button = ({ children, disabled }: ButtonProps) => {
  return <button disabled={disabled}>{children}</button>;
};

Button.defaultProps = {
  disabled: false
}

export default Button;

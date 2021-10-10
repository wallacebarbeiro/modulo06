import React from "react";
import styled from 'styled-components';
import get from 'lodash/get';


const ButtonWrapper = styled.button`
  border:0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;

  color: ${({theme, color}) => get(theme, `colors.${color}.contrastText`)};
  background: ${({theme, color}) => get(theme, `colors.${color}.color`)};

  &disabledc {
    cursor: not-allowed;
    opacity: 0.2;
  }
`;

interface ButtonProps {
  /**
   * Essa prop usa o disabled padrão do html e aplica um css junto
   */
  disabled?: boolean;
  /**
   * Passa via children o que deseja renderizar dentro do botão 
   */
  children: React.ReactNode;
  color: string 
};

const Button = ({ children, disabled, color }: ButtonProps) => {
  return  <ButtonWrapper disabled={disabled} color={color}>{children}</ButtonWrapper>;
};

Button.defaultProps = {
  disabled: false,
  color: 'primary.main'
}

export default Button;

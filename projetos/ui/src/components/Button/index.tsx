import React from "react";
import { ButtonWrapper, ButtonWrapperProps } from "./styles/ButtonWrapper";


interface ButtonBaseProps {
  type?: "button" | "submit" | "reset";
  /**
   * Essa prop usa o disabled padrão do html e aplica um css junto
   */
  disabled?: boolean;
  /**
   * Passa via children o que deseja renderizar dentro do botão 
   */
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
 
};

type ButtonProps = ButtonBaseProps & ButtonWrapperProps;

interface Pokemon {
  nome: string
}

function pegaPokemons(): Promise<Pokemon> {
  return fetch('url')
    .then((respostaDoServer) => {
      return respostaDoServer.json();
    });
}

pegaPokemons();

function Button({ type, children, disabled, color, onClick }: ButtonProps): JSX.Element {
  return  (
    <ButtonWrapper type={type} disabled={disabled} color={color} onClick={onClick}>{children}</ButtonWrapper>)
    ;
};

Button.defaultProps = {
  disabled: false,
  color: 'primary.main',
  onClick: () => {}
}

export default Button;

import React  from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../index';

interface UiProviderProps {
    children: React.ReactNode
}

export const UIProvider = ({ children } : UiProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
import styled from 'styled-components';
import { UIProvider } from '@wallacebarbeiro/ui/src/theme/UIProvider';
import Button  from '@wallacebarbeiro/ui/src/components/Button';
 
const Title = styled.h1`
  color: Blue;
  font-size: 50px;
`

export default function Home() {
  return (
    <UIProvider>
      <div>
        
          <Title>
            Com button
          </Title>
          <Button disabled>
              Meu primeiro botão 
          </Button>
      </div>
    </UIProvider>
  );
}

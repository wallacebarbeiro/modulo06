import styled from 'styled-components';
import Button  from '@wallacebarbeiro/ui/src/components/Button';
 
const Title = styled.h1`
  color: Blue;
  font-size: 50px;
`

export default function Home() {
  return (
    <div>
      <Title>
        Com button
      </Title>
      <Button>
          Meu primeiro botão 
      </Button>
    </div>
  );
}

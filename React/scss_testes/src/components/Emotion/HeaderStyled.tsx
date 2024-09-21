import styled from 'styled-components';

// Definindo os componentes estilizados
const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #61dafb;
`;

function HeaderStyled() {
  return (
    <HeaderContainer>
      <Title>Welcome to React with Styled-components</Title>
      <Description>This is an example using Styled-components.</Description>
    </HeaderContainer>
  );
}

export default HeaderStyled;

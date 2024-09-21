import { css } from '@emotion/react';
import styled from 'styled-components';
/** @jsxImportSource @emotion/react */


interface ButtonProps {
  label: string;
  onClick: () => void;
}

// Estilização com Styled-components
const StyledButton = styled.button`
  background-color: #61dafb;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;

  &:hover {
    background-color: #21a1f1;
  }
`;

// Estilização com Emotion
const emotionButtonStyle = css`
  background-color: #e91e63;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;

  &:hover {
    background-color: #d81b60;
  }
`;

function Button({ label, onClick }: ButtonProps) {
  return (
    <div>
      <StyledButton onClick={onClick}>{label} (Styled-components)</StyledButton>
      <button css={emotionButtonStyle} onClick={onClick} style={{ marginLeft: '10px' }}>
        {label} (Emotion)
      </button>
    </div>
  );
}

export default Button;

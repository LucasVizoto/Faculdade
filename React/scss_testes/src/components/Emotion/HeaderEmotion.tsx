/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyle = css`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  color: white;
`;

const titleStyle = css`
  font-size: 2.5rem;
`;

const descriptionStyle = css`
  font-size: 1.2rem;
  color: #61dafb;
`;

function HeaderEmotion() {
  return (
    <header css={headerStyle}>
      <h1 css={titleStyle}>Welcome to React with Emotion</h1>
      <p css={descriptionStyle}>This is an example using Emotion.</p>
    </header>
  );
}

export default HeaderEmotion;

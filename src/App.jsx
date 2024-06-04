/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          width: 200px;
        `}
      >
        <Button type="primary" />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          width: 200px;
        `}
      >
        <Button type="secondary" />
      </div>
      <hr />
      <div css={css`display: flex; flex-direction: column; gap: 5px; width: 100%`}>
        <Alert type="error" />
        <Alert type="warning" />
        <Alert type="alert" />
        <Alert type="success" />
      </div>
    </>
  );
}

export default App;

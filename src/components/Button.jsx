// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "primary") {
    return (
      <>
        <h3>Primary</h3>
        <button css={css`background-color: #074EE8`}>Button</button>
      </>
    );
  } else if (props.type === "secondary") {
    return (
      <>
        <h3>secondary</h3>
        <button css={css`background-color: #07A4E8`}>Button</button>
      </>
    );
  }
}
export default Button;

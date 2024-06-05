// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(prop) {
  let bgColor = "";
  if (prop.type === "Primary") {
    bgColor = "#074ee8";
  } else if (prop.type === "Secondary") {
    bgColor = "#07a4e8";
  }
  return (
    <>
      <div
        css={css`
          width: 400px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <h1
          css={css`
            font-size: 32px;
          `}
        >
          {prop.type}
        </h1>
        <button
          className={prop.type}
          css={css`
            width: 171.19px;
            height: 50px;
            top: 273px;
            left: 278.92px;
            padding: px 16px 0px 16px;
            gap: 8px;
            border-radius: 4px;
            opacity: 0px;
            color: white;
            margin: 5px;
            background-color: ${bgColor};
          `}
        >
          Large
        </button>
      </div>
    </>
  );
}

export default Button;

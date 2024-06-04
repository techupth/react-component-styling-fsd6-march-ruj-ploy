// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
  if (props.type === "success") {
    return (
      <div
        css={css`
          width: 630px;
          height: 76px;
          background-color: #cef7cd;
          color: black;
          align-content: center;
          display: flex; 
          flex-direction: row;
          align-items: center;
          gap: 10px;
          padding-left: 20px;
        `}
      >
      <img src="react-component-styling-fsd6-march-ruj-ploy\src\assets\check-circle.svg"/>
      <h2>This is success alert box</h2>
      </div>
    );
  } else if (props.type === "alert") {
    return (
      <div
        css={css`
          wigth: 630px;
          height: 76px;
          background-color: #F9EBC8;
          color: black;
          align-content: center;
          display: flex; 
          flex-direction: row;
          align-items: center;
          gap: 10px;
          padding-left: 20px;
        `}
      >
      <img src="react-component-styling-fsd6-march-ruj-ploy\src\assets\alert-circle.svg"/>
      <h2>This is info alert box</h2>
      </div>
    );
  } else if (props.type === "warning") {
    return (
      <div
        css={css`
          wigth: 630px;
          height: 76px;
          background-color: #F9D9C8;
          color: black;
          align-content: center;
          display: flex; 
          flex-direction: row;
          align-items: center;
          gap: 10px;
          padding-left: 20px;
        `}
      >
      <img src="react-component-styling-fsd6-march-ruj-ploy\src\assets\alert-triangle.svg"/>
      <h2>This is warning alert box</h2>
      </div>
    );
  } else {
    return (
      <div
        css={css`
          wigth: 630px;
          height: 76px;
          background-color: #F9C8C8;
          color: black;
          align-content: center;
          display: flex; 
          flex-direction: row;
          align-items: center;
          gap: 10px;
          padding-left: 20px;
        `}
      >
      <img src="react-component-styling-fsd6-march-ruj-ploy\src\assets\frown.svg"/>
      <h2>This is error alert box</h2>
      </div>
    );
  }
}
export default Alert;

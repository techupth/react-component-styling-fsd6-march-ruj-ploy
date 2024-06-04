// Start coding here

function Alert(props) {
  return (
    <div
      style={{
        background: props.backgroundColor,
      }}
      className="alert-box"
    >
      <img src={props.icon} alt={props.title} />
      {props.title}
    </div>
  );
}

export default Alert;

import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

import alertCircle from "./assets/alert-circle.svg";
import alertTriangle from "./assets/alert-triangle.svg";
import checkCircle from "./assets/check-circle.svg";
import frown from "./assets/frown.svg";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button backgroundColor="#074ee8" />
        <Button backgroundColor="#07a4e8" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert
          title="This is error alert box"
          backgroundColor="#f9c8c8"
          icon={frown}
        />
        <Alert
          title="This is warning alert box"
          backgroundColor="#F9D9C8"
          icon={alertTriangle}
        />
        <Alert
          title="This is info alert box"
          backgroundColor="#F9EBC8"
          icon={alertCircle}
        />
        <Alert
          title="This is success alert box"
          backgroundColor="#CEF7CD"
          icon={checkCircle}
        />
      </div>
    </div>
  );
}

export default App;

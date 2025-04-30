import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {

  const [colorChanger,setColorChanger] = useState("#212529");

  const colorhandler = (blue) => {
    setColorChanger(blue);
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-end" style={{ height: "100vh",backgroundColor:colorChanger}}>
        <div className="containers my-5">
          <button type="button" className="btn btn-primary" onClick={() => colorhandler("blue")}>
            Primary
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => colorhandler("gray")}>
            Secondary
          </button>
          <button type="button" className="btn btn-success" onClick={() => colorhandler("green")}>
            Success
          </button>
          <button type="button" className="btn btn-danger" onClick={() => colorhandler("red")}>
            Danger
          </button>
          <button type="button" className="btn btn-warning" onClick={() => colorhandler("yellow")}>
            Warning
          </button>
          <button type="button" className="btn btn-info" onClick={() => colorhandler("skyblue")}>
            Info
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

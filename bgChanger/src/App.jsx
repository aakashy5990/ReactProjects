import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {

  const [colorChanger,setColorChanger] = useState("#212529");

  return (
    <>
      <div className="d-flex justify-content-center align-items-end" style={{ height: "100vh",backgroundColor:colorChanger}}>
        <div className="containers my-5">
          <button type="button" className="btn btn-primary" onClick={() => setColorChanger("blue")}>
            Primary
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => setColorChanger("gray")}>
            Secondary
          </button>
          <button type="button" className="btn btn-success" onClick={() => setColorChanger("green")}>
            Success
          </button>
          <button type="button" className="btn btn-danger" onClick={() => setColorChanger("red")}>
            Danger
          </button>
          <button type="button" className="btn btn-warning" onClick={() => setColorChanger("yellow")}>
            Warning
          </button>
          <button type="button" className="btn btn-info" onClick={() => setColorChanger("skyblue")}>
            Info
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

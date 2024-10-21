import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App(props) {
  const step = 2;
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className="active">1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <p className="message">
          step {step} : {messages[step - 1]}
        </p>

        <div className="buttons">
          <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
            prev
          </button>
          <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

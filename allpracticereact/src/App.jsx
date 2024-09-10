import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Theprofile />
    </div>
  );
}

function Theprofile() {
  return (
    <div className="container">
      <Avatar PhotoName="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rZoL-mWKEjFdKs6jpjw-WoObrXm7zClR7w&s" />
      <div>
        <Intro
          PersonName="Jonas Schmedtmann"
          Description="full-stack web development and techer at udemy.when not codding or
          preparing a course, i like to play boad games, to cook (and eat), or
          to just enjoy the portuguese sun at the beach."
        />
      </div>
      <div>
        <SkillList
          SkillOne="HTML + CSS"
          SkillTwo="Javascript"
          SkillThree="Web design"
        />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="Avartashell">
      <img src={props.PhotoName} alt="" srcset="" className="Avartaimg" />
    </div>
  );
}
function Intro(props) {
  return (
    <div className="intro">
      <h1>{props.PersonName}</h1>
      <p>{props.Description}</p>
    </div>
  );
}
function SkillList(props) {
  const skillStyles = {
    skillOne: { backgroundColor: "blue", padding: "10px", margin: "5px" },
    skillTwo: { backgroundColor: "yellow", padding: "10px", margin: "5px" },
    skillThree: { backgroundColor: "grey", padding: "10px", margin: "5px" },
  };
  return (
    <div className="skillslists">
      <p style={skillStyles.skillOne}>{props.SkillOne}</p>
      <p style={skillStyles.skillTwo}>{props.SkillTwo}</p>
      <p style={skillStyles.skillThree}>{props.SkillThree}</p>
      <p></p>
    </div>
  );
}
export default App;

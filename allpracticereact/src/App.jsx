import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Theprofile />
    </div>
  );
}

function Theprofile() {
  const allSkills = skills;
  console.log(allSkills);
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

      <ul>
        {allSkills.map((allskill) => (
          <SkillList skillObj={allskill} key={allskill.skill} />
        ))}
      </ul>
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
  return (
    <li className="skillslists">
      <h2>{props.skillObj.skill}</h2>
      <p>{props.skillObj.color}</p>
      <p>{props.skillObj.level}</p>
    </li>
  );
}
export default App;

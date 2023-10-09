import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>
        </div>
    );
}

function Avatar() {
    return <img className="avatar" src="jonas.jpeg" alt="Jonas Schmedtmann" />;
}

function Intro() {
    return (
        <div>
            <h1>Jonas Schmedtmann</h1>
            <p>
                Full-stack web developer and teacher at Udemy. When not coding or
                preparing a course, I like to play board games, to cook (and eat), or to
                just enjoy the Portuguese sun at the beach.
            </p>
        </div>
    );
}

const SkillsData = [
    {
        skill: "Node JS",
        level: "Intermediate",
        color: "orange"
    },
    {
        skill: "React",
        level: "Beginner",
        color: "purple"
    },
    {
        skill: "JavaScript",
        level: "Intermediate",
        color: "skyblue"
    },
    {
        skill: "Golang",
        level: "Advanced",
        color: "limegreen"
    },
    {
        skill: "PLSQL",
        level: "Advanced",
        color: "gold"
    }
];


function SkillList() {
    const skillList = () => {
        return SkillsData.map((skill) => (
            <li>
                <Skill SkillObj={skill} />
            </li>
        ));
    };

    return <ul className="skill-list">
        {skillList()}
    </ul>;
}

function Skill({ SkillObj }) {

    // console.log(SkillObj);

    return (
        <div className="skill" style={{ backgroundColor: SkillObj.color }}>
            <span>{SkillObj.skill}</span>
            <span>{SkillObj.level === "Advanced" && "😊"}
                {SkillObj.level === "Intermediate" && "😂"}
                {SkillObj.level === "Beginner" && "😒"}
            </span>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

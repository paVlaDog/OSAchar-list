import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import MyTextArea from "./UI/MyTextArea";
import MyInputPlus from "./UI/MyInputPlus";

const Skills = ({skills, create, addSkills, createAddSkills}) => {
    return (
        <Accordion>
            <Accordion.Item eventKey={"skills"}>
                <Accordion.Header>Прочие черты:</Accordion.Header>
                <Accordion.Body>
                    <h5 style={{display: "inline-flex"}}>Потраченные очки умений:</h5>
                    <MyInputPlus
                        f1 = {() => createAddSkills(+addSkills - 1)}
                        f2 = {() => createAddSkills(+addSkills + 1)}
                        value = {addSkills}
                        onChange={e => createAddSkills(e.target.value)}
                        type={"text"}
                        placeholder={"Бонус"}
                    />
                    <MyTextArea
                        style={{width: "100%", height: "400px", textAlign: "start"}}
                        value = {skills}
                        onChange={e => {create(e.target.value)}}
                        placeholder={"Нулевой скилл"}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Skills;
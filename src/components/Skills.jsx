import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import MyInput from "./UI/MyInput";
import MyTextArea from "./UI/MyTextArea";

const Skills = ({skills, create}) => {
    return (
        <Accordion>
            <Accordion.Item eventKey={"skills"}>
                <Accordion.Header>Прочие черты:</Accordion.Header>
                <Accordion.Body>
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
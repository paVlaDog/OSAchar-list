import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import MyInput from "./UI/MyInput";

const Skills = ({skills, create}) => {
    return (
        <Accordion>
            <Accordion.Item eventKey={"skills"}>
                <Accordion.Header>Прочие черты:</Accordion.Header>
                <Accordion.Body>
                    <MyInput
                        style={{alignItems:"start", width: "100%", height: "400px", textAlign: "start"}}
                        value = {skills}
                        onChange={e => {create(e.target.value)}}
                        type={"text"}
                        placeholder={"Ха, нулёвый!"}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Skills;
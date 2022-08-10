import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import MyInput from "./UI/MyInput";

const CharacterClass = ({characterClass, create}) => {
    return (
        <Accordion>
            <Accordion.Item eventKey={"characterClass"}>
                <Accordion.Header>Класс</Accordion.Header>
                <Accordion.Body>
                    <MyInput
                        style={{alignItems:"start", width: "100%", height: "400px", textAlign: "start"}}
                        value = {characterClass}
                        onChange={e => {create(e.target.value)}}
                        type={"text"}
                        placeholder={"Видимо, воин"}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default CharacterClass;
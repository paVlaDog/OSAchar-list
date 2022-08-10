import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import MyInput from "./UI/MyInput";
import MyTextArea from "./UI/MyTextArea";

const CharacterClass = ({characterClass, create}) => {
    return (
        <Accordion>
            <Accordion.Item eventKey={"characterClass"}>
                <Accordion.Header>Класс</Accordion.Header>
                <Accordion.Body>
                    <MyTextArea
                        style={{width: "100%", height: "400px", textAlign: "start"}}
                        value = {characterClass}
                        onChange={e => {create(e.target.value)}}
                        placeholder={"Видимо, воин"}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default CharacterClass;
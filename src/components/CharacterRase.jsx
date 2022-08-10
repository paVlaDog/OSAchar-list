import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import MyInput from "./UI/MyInput";

const CharacterRase = ({characterRace, create}) => {
    return (
        <Accordion>
            <Accordion.Item eventKey={"characterRace"}>
                <Accordion.Header>Раса</Accordion.Header>
                <Accordion.Body>
                    <MyInput
                        style={{alignItems:"start", width: "100%", height: "400px", textAlign: "start"}}
                        value = {characterRace}
                        onChange={e => {create(e.target.value)}}
                        type={"text"}
                        placeholder={"Видимо, человек"}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default CharacterRase;
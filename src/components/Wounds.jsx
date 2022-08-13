import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import MyTextArea from "./UI/MyTextArea";

const Wounds = ({wounds, create}) => {
    return (
        <Accordion>
            <Accordion.Item eventKey={"wounds"}>
                <Accordion.Header>Ранения:</Accordion.Header>
                <Accordion.Body>
                    <MyTextArea
                        style={{width: "100%", height: "400px", textAlign: "start"}}
                        value = {wounds}
                        onChange={e => {create(e.target.value)}}
                        placeholder={"Ты ранен, но в душе"}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Wounds;
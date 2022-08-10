import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import MyInput from "./UI/MyInput";

const Spells = ({spells, create}) => {
    return (
        <Accordion>
            <Accordion.Item eventKey={"spells"}>
                <Accordion.Header>Заклинания:</Accordion.Header>
                <Accordion.Body>
                    <MyInput
                        style={{alignItems:"start", width: "100%", height: "400px", textAlign: "start"}}
                        value = {spells}
                        onChange={e => {create(e.target.value)}}
                        type={"text"}
                        placeholder={"Ха, нулёвый!"}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Spells;
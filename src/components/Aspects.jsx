import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import MyInput from "./UI/MyInput";

const Aspects = ({aspects, create}) => {

    return (
        <Accordion>
            <Accordion.Item eventKey={"aspects"}>
                <Accordion.Header>Аспекты:</Accordion.Header>
                <Accordion.Body>
                    <MyInput
                        style={{alignItems:"start", width: "100%", height: "400px", textAlign: "start"}}
                        value = {aspects}
                        onChange={e => {create(e.target.value)}}
                        type={"text"}
                        placeholder={"Как минимум 4 аспекта-черты характера и 3 прочих"}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Aspects;
import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import MyInput from "./UI/MyInput";
import MyTextArea from "./UI/MyTextArea";

const Aspects = ({aspects, create}) => {

    return (
        <Accordion>
            <Accordion.Item eventKey={"aspects"}>
                <Accordion.Header>Аспекты:</Accordion.Header>
                <Accordion.Body>
                    <div>Со старта у вас должно быть хотя бы 7 аспектов, из которых:</div>
                    <div>Хотя бы 4 - черты характера</div>
                    <div>Хотя бы 1 - ваша цель приключения</div>
                    <MyTextArea
                        style={{width: "100%", height: "400px", textAlign: "start"}}
                        value = {aspects}
                        onChange={e => {create(e.target.value)}}
                        placeholder={"Серый и убогий"}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Aspects;
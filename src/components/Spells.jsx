import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import MyInput from "./UI/MyInput";

const Spells = ({spells, create , vladenia, int}) => {
    const shiftWeaponsVladenia = 9;
    const maksSpells = vladenia.slice(shiftWeaponsVladenia, shiftWeaponsVladenia + 7).reduce((a, b) => +a + +b, 0) * int;
    return (
        <Accordion>
            <Accordion.Item eventKey={"spells"}>
                <Accordion.Header>Заклинания:</Accordion.Header>
                <Accordion.Body>
                    <h5 style={{display: "inline-flex"}}>Максимальное количество заклинаний:</h5>
                    <MyInput
                        disabled = {"true"}
                        value = {maksSpells}
                        type={"text"}
                        placeholder={"Лох-Без-Имени"}/>
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
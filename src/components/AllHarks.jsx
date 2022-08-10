import React from 'react';
import Harka from "./Harka";
import Accordion from "react-bootstrap/Accordion";
import MyInput from "./UI/MyInput";
import {Nav} from "react-bootstrap";

const AllHarks = ({Harks, create, accordionNumber, level}) => {
    const createVal = (num) => (newVal) => {
        const newHarks = Harks.slice(0)
        newHarks[num] = newVal
        create(newHarks)
    };

    const maxHark = (lvl) => {
        if (+lvl <= 1) {
            return 4;
        } else if (+lvl < 5) {
            return 6;
        } else if (+lvl < 10) {
            return 8;
        } else {
            return 10;
        }
    }

    return (
        <Accordion.Item eventKey={accordionNumber}>
            <Accordion.Header>Характеристики</Accordion.Header>
            <Accordion.Body>
                <div>Минимальное значение: -2</div>
                <div>Максимальное значение: 4 при старте, 6 до 5ого уровня, 8 до 10ого, 10 до 15ого</div>
                    <h5 style={{display: "inline-flex"}}>{"Максимальное значение характеристики: "} </h5>
                    <MyInput
                        disabled = {"true"}
                        value = {maxHark(level)}
                        type={"text"}
                        placeholder={"0"}/>
                <Harka val={Harks[0]} create={createVal(0)} name={"Сила"}/>
                <Harka val={Harks[1]} create={createVal(1)} name={"Телосложение"}/>
                <Harka val={Harks[2]} create={createVal(2)} name={"Ловкость"}/>
                <Harka val={Harks[3]} create={createVal(3)} name={"Интелект"}/>
                <Harka val={Harks[4]} create={createVal(4)} name={"Мудрость"}/>
                <Harka val={Harks[5]} create={createVal(5)} name={"Харизма"}/>
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default AllHarks;
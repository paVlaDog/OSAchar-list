import React from 'react';
import Harka from "./Harka";
import Accordion from "react-bootstrap/Accordion";
import MyInput from "./UI/MyInput";
import {Nav} from "react-bootstrap";

const AllHarks = ({Harks, create, accordionNumber, power}) => {
    const createVal = (num) => (newVal) => {
        const newHarks = Harks.slice(0)
        newHarks[num] = newVal
        create(newHarks)
    };

    const maxHark = Math.floor(power / 5 - 2)

    return (
        <Accordion.Item eventKey={accordionNumber}>
            <Accordion.Header>Характеристики</Accordion.Header>
            <Accordion.Body>
                <div>Минимальное значение: -2</div>
                <div>Максимальное значение: 5 с 35 мощи, каждые 5 мощи граница отодвигается на 1.</div>
                    <h5 style={{display: "inline-flex"}}>{"Максимальное значение характеристики: "} </h5>
                    <MyInput
                        disabled = {"true"}
                        value = {maxHark}
                        type={"text"}
                        placeholder={"0"}/>
                <div>При создании персонажа значение +4 может быть не более чем у одной характеристики. Для всех прочих максимум +3</div>
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
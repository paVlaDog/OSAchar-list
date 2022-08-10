import React, {useState} from 'react';
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import MyInput from "./UI/MyInput";

const Stats = ({boneHits, boneMane, harki, accordionNumber, addVal, create, level}) => {
    const midVal = function (bone) {
        if (bone.length < 3) {
            return +bone;
        } else if (bone.length === 3) {
            return (+bone[2] + 1) / 2;
        } else if (bone.length === 4) {
            return (+bone[2] * 10 + +bone[3] + 1) / 2;
        }
        return "Error";
    }

    //const [addVal, setAddVal] = useState(Array(6).fill(0));
    const createAddVal = (num) => (newVal) => {
        const newHarks = addVal.slice(0)
        newHarks[num] = newVal
        create(newHarks)
    };
    const createAddInput = (num) => {
        return (
            <MyInput
                value = {addVal[num]}
                onChange={e => createAddVal(num)(e.target.value)}
                type={"text"}
                placeholder={"Бонус"}
            />
        )
    }


    return (
        <AccordionItem eventKey={accordionNumber}>
            <AccordionHeader>Вычисляемые значения:</AccordionHeader>
            <AccordionBody>
                <div>КФЗ:
                    <MyInput
                        disabled = {"true"}
                        value = {10 + +harki[2] + +addVal[0]}
                        type={"text"}
                        placeholder={"0"}/>
                     Бонусное:
                    {createAddInput(0)}</div>
                <div>КМЗ:
                    <MyInput
                        disabled = {"true"}
                        value = {+harki[5] + +addVal[1]}
                        type={"text"}
                        placeholder={"0"}/>
                     Бонусное:
                    {createAddInput(1)}</div>
                <div>ЖСИ:
                    <MyInput
                        disabled = {"true"}
                        style = {{width: "70px"}}
                        value = {boneHits + " + " + (+harki[1] + +addVal[2])}
                        type={"text"}
                        placeholder={"0"}/>
                     Бонусное:
                    {createAddInput(2)}</div>
                <div>МСИ:
                    <MyInput
                        disabled = {"true"}
                        style = {{width: "70px"}}
                        value = {boneMane + " + " + (+harki[4] + +addVal[3])}
                        type={"text"}
                        placeholder={"0"}/>
                     Бонусное:
                    {createAddInput(3)}</div>
                <div>Запас хитов(средний):
                    <MyInput
                        disabled = {"true"}
                        value = {Math.floor((4 + +level) * (midVal(boneHits) + +harki[1] + +addVal[2]) + +addVal[4])}
                        type={"text"}
                        placeholder={"0"}/>
                     Бонусное:
                    {createAddInput(4)}</div>
                <div>Запас маны(средний):
                    <MyInput
                        disabled = {"true"}
                        value = {Math.floor((4 + +level) * (midVal(boneMane) + +harki[4] + +addVal[3]) + +addVal[5])}
                        type={"text"}
                        placeholder={"0"}/>
                     Бонусное:
                    {createAddInput(5)}</div>
                <div>Бонус атаки(Сила):
                    <MyInput
                        disabled = {"true"}
                        value = {+harki[0] + +addVal[6]}
                        type={"text"}
                        placeholder={"0"}/>
                     Бонусное:
                    {createAddInput(6)}</div>
                <div>Бонус атаки(Ловкость):
                    <MyInput
                        disabled = {"true"}
                        value = {+harki[2] + +addVal[7]}
                        type={"text"}
                        placeholder={"0"}/>
                     Бонусное:
                    {createAddInput(7)}</div>
                <div>Бонус каста(Мудрость):
                    <MyInput
                        disabled = {"true"}
                        value = {+harki[4] + +addVal[8]}
                        type={"text"}
                        placeholder={"0"}/>
                     Бонусное:
                    {createAddInput(8)}</div>
                <div>Бонус влияний(Харизма):
                    <MyInput
                        disabled = {"true"}
                        value = {+harki[5] + +addVal[9]}
                        type={"text"}
                        placeholder={"0"}/>
                     Бонусное:
                    {createAddInput(9)}</div>
            </AccordionBody>
        </AccordionItem>
    );
};

export default Stats;
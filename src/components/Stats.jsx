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
                <div>КФЗ:{10 + +harki[2] + +addVal[0]} {createAddInput(0)}</div>
                <div>КМЗ:{+harki[5] + +addVal[1]} {createAddInput(1)}</div>
                <div>ЖСИ:{boneHits + " + " + (+harki[1] + +addVal[2])} {createAddInput(2)}</div>
                <div>МСИ:{boneMane + " + " + (+harki[4] + +addVal[3])} {createAddInput(3)}</div>
                <div>Запас хитов(средний):{Math.floor((4 + +level) * (midVal(boneHits) + +harki[1] + +addVal[2]) + +addVal[4])} {createAddInput(4)}</div>
                <div>Запас маны(средний):{Math.floor((4 + +level) * (midVal(boneMane) + +harki[4] + +addVal[3]) + +addVal[5])} {createAddInput(5)}</div>
                <div>Бонус атаки(Сила):{+harki[0] + +addVal[6]} {createAddInput(6)}</div>
                <div>Бонус атаки(Ловкость):{+harki[2] + +addVal[7]} {createAddInput(7)}</div>
                <div>Бонус каста(Мудрость):{+harki[4] + +addVal[8]} {createAddInput(8)}</div>
                <div>Бонус влияний(Харизма):{+harki[5] + +addVal[9]} {createAddInput(9)}</div>
            </AccordionBody>
        </AccordionItem>
    );
};

export default Stats;
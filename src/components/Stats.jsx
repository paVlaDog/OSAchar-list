import React from 'react';
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

const Stats = ({boneHits, boneMane, harki, accordionNumber}) => {
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

    return (
        <AccordionItem eventKey={accordionNumber}>
            <AccordionHeader>Вычисляемые значения:</AccordionHeader>
            <AccordionBody>
                <div>КФЗ:{10 + +harki[2]}</div>
                <div>КМЗ:{harki[5]}</div>
                <div>ЖСИ:{boneHits + " + " + harki[1]}</div>
                <div>МСИ:{boneMane + " + " + harki[4]}</div>
                <div>Запас хитов(средний):{Math.floor(5 * (midVal(boneHits) + +harki[1]))}</div>
                <div>Запас маны(средний):{Math.floor(5 * (midVal(boneMane) + +harki[4]))}</div>
            </AccordionBody>
            </AccordionItem>
    );
};

export default Stats;
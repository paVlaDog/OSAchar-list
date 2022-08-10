import React from 'react';
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import MyInputPlus from "./UI/MyInputPlus";
import BoneClass from "./BoneClass";
import AccordionItem from "react-bootstrap/AccordionItem";

const BoneMane = ({boneMane, create}) => {
    return (
        <AccordionItem eventKey={4}>
            <AccordionHeader>{"Кость маны"}</AccordionHeader>
            <AccordionBody>
                <div>{"Если вы не заклинатель - 0. Если заклинатель - указанное в классе значение"}</div>
                <MyInputPlus
                    f1 = {() => create((new BoneClass(boneMane)).prevVal())}
                    f2 = {() => create((new BoneClass(boneMane)).nextVal())}
                    style={{width: "70px"}}
                    value = {boneMane}
                    onChange={e => create(e.target.value)}
                    type={"text"}
                    placeholder={"Бескостный"}
                />
            </AccordionBody>
        </AccordionItem>
    );
};

export default BoneMane;
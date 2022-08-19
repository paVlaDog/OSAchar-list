import React from 'react';
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import MyInputPlus from "./UI/MyInputPlus";
import BoneClass from "./BoneClass";
import AccordionItem from "react-bootstrap/AccordionItem";

const BoneHits = ({boneHits, create}) => {
    return (
        <AccordionItem eventKey={3}>
            <AccordionHeader>{"Кость хитов"}</AccordionHeader>
            <AccordionBody>
                <div>{"Базовая - 1к6. Кость хитов может быть увеличена некотрыми способностями"}</div>
                <MyInputPlus
                    f1 = {() => create((new BoneClass(boneHits)).prevVal())}
                    f2 = {() => create((new BoneClass(boneHits)).nextVal())}
                    style={{width: "70px"}}
                    value = {boneHits}
                    onChange={e => create(e.target.value)}
                    type={"text"}
                    placeholder={"Бескостный"}
                />
            </AccordionBody>
        </AccordionItem>
    );
};

export default BoneHits;
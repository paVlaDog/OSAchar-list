import React from 'react';
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import MyInputPlus from "./UI/MyInputPlus";
import BoneClass from "./BoneClass";

const Bone = ({name, description, val, create, accordionNumber}) => {

    return (
        <AccordionItem eventKey={accordionNumber}>
            <AccordionHeader>{name}</AccordionHeader>
            <AccordionBody>
                <div style={{display: "inline-block"}}>{description}</div>
                <MyInputPlus
                    f1 = {() => create((new BoneClass(val)).prevVal())}
                    f2 = {() => create((new BoneClass(val)).nextVal())}
                    style={{width: "70px"}}
                    value = {val}
                    onChange={e => create(e.target.value)}
                    type={"text"}
                    placeholder={"Бескостный"}
                />
            </AccordionBody>
        </AccordionItem>
    );
};

export default Bone;
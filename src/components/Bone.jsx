import React from 'react';
import AccordionItem from "react-bootstrap/AccordionItem";
import {Accordion} from "react-bootstrap";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

const Bone = ({name, description, val, create, accordionNumber}) => {
    return (
        <AccordionItem eventKey={accordionNumber}>
            <AccordionHeader>{name}</AccordionHeader>
            <AccordionBody>
                <div>{description}</div>
                <input
                    value = {val}
                    onChange={e => create(e.target.value)}
                    type={"text"}
                    placeholder={"1к(Значение)"}
                />
            </AccordionBody>
        </AccordionItem>
    );
};

export default Bone;
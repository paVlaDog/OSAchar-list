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
                <div>{"Базовая - 1к6. 1к8 стоит 2 очка и даёт +1 влияние, 1к10 стоит 4 очка и даёт +2 влияния"}</div>
                <div>{"Можно понизить до 1к4 и получить 2 дополнительных очка умений"}</div>
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
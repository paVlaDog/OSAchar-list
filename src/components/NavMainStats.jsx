import React from 'react';
import {Nav} from "react-bootstrap";
import MyInput from "./UI/MyInput";
import MyInputPlus from "./UI/MyInputPlus";
import MyInputDrop from "./UI/MyInputDrop";

const NavMainStats = ({power, createPower, skillPointsLast, create, navStats, maxHits, maxMane}) => {
    const createNavStats = (num) => (newVal) => {
        const newHarks = navStats.slice(0)
        newHarks[num] = newVal
        create(newHarks)
    };

    return (
        <Nav
            style={{display: "flex", justifyContent: "space-around"}}
            activeKey="/home"
            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <h5 style={{display: "inline-flex"}}>Имя:</h5>
                <MyInput
                    style={{width: "130px"}}
                    value = {navStats[0]}
                    onChange={e => {
                        createNavStats(0)(e.target.value);
                    }}
                    type={"text"}
                    placeholder={"Лох-Без-Имени"}/>
            </Nav.Item>

            <Nav.Item>
                <h5 style={{display: "inline-flex"}}>Мощь:</h5>
                <MyInputPlus
                    f1 = {() => createPower(+power - 1)}
                    f2 = {() => createPower(+power + 1)}
                    value = {power}
                    onChange={e => createPower(e.target.value)}
                    type={"text"}
                    placeholder={"Значение"}
                />
            </Nav.Item>

            <Nav.Item>
                <h5 style={{display: "inline-flex"}}>{"Очков навыков осталось: "} </h5>
                <MyInput
                    disabled = {"true"}
                    value = {skillPointsLast}
                    type={"text"}
                    placeholder={"0"}/>
            </Nav.Item>

            <Nav.Item>
                <h5 style={{display: "inline-flex"}}>Хиты:</h5>
                <MyInputDrop
                    create = {(val) => {createNavStats(1)(val)}}
                    val={navStats[1]}
                    value = {navStats[1]}
                    onChange={e => {createNavStats(1)(e.target.value);}}
                    type={"text"}
                    placeholder={"0"}
                />
                <h5 style={{display: "inline-flex"}}>из</h5>
                <MyInput
                    disabled = {"true"}
                    value = {maxHits}
                    type={"text"}
                    placeholder={"0"}/>
            </Nav.Item>

            <Nav.Item>
                <h5 style={{display: "inline-flex"}}>Мана:</h5>
                <MyInputDrop
                    create = {(val) => {createNavStats(2)(val)}}
                    val={navStats[2]}
                    value = {navStats[2]}
                    onChange={e => {createNavStats(2)(e.target.value);}}
                    type={"text"}
                    placeholder={"0"}
                />
                <h5 style={{display: "inline-flex"}}>из</h5>
                <MyInput
                    disabled = {"true"}
                    value = {maxMane}
                    type={"text"}
                    placeholder={"0"}/>
            </Nav.Item>

            <Nav.Item>
                <h5 style={{display: "inline-flex"}}>Вдохновения:</h5>
                <MyInputPlus
                    f1 = {() => createNavStats(3)(+navStats[3] - 1)}
                    f2 = {() => createNavStats(3)(+navStats[3] + 1)}
                    value = {navStats[3]}
                    onChange={e => createNavStats(3)(e.target.value)}
                    type={"text"}
                    placeholder={"Значение"}
                />
            </Nav.Item>
        </Nav>
    );
};

export default NavMainStats;
import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import MyInput from "./UI/MyInput";
import MyInputPlus from "./UI/MyInputPlus";

const Vladenie = ({val, create, name, type, num}) => {

    const radios =
        (type === "quarta") ? [
        { name: '0', value: '0' },
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
    ] : [
        { name: '0', value: '0' },
        { name: '1', value: '1' },
    ];

    const getVlad2 = new Map([
        [0, 'Отсутствие'],
        [1, 'Владение']
    ])

    const getVlad4 = new Map([
        [0, 'Отсутствие'],
        [1, 'Ученик'],
        [2, 'Ветеран/Адепт'],
        [3, 'Мастер']
    ])


    return (
        <div>
            {/*<MyInput*/}
            {/*    value = {val}*/}
            {/*    onChange={e => create(e.target.value)}*/}
            {/*    type={"text"}*/}
            {/*    placeholder={"0 - отсутствие, 3 - мастер"}*/}
            {/*/>*/}
            <text>{name}</text>
            <MyInputPlus
                f1 = {() => create(+val - 1)}
                f2 = {() => create(+val + 1)}
                style = {{width: "125px"}}
                value = {type === "quarta" ? getVlad4.get(val) : getVlad2.get(val)}
                onChange={e => create(e.target.value)}
                type={"text"}
                placeholder={"Лох"}
            />
            {/*<ButtonGroup className="mb-2">*/}
            {/*    {radios.map((radio, idx) => (*/}
            {/*        <ToggleButton*/}
            {/*            key={idx}*/}
            {/*            id={`radioVladenia${num}-${idx}`}*/}
            {/*            type="radio"*/}
            {/*            variant="outline-primary"*/}
            {/*            name={"radioVladenia" + num}*/}
            {/*            value={radio.value}*/}
            {/*            onChange={(e) => create(radio.value)}*/}
            {/*        >*/}
            {/*            {radio.name}*/}
            {/*        </ToggleButton>*/}
            {/*    ))}*/}
            {/*</ButtonGroup>*/}
        </div>
    );
};

export default Vladenie;
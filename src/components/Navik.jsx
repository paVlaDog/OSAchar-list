import React, {useState} from 'react';
import MyInputPlus from "./UI/MyInputPlus";


const Navik = ({val, create, nameNavik, num}) => {
    // const radios = [
    //     { name: '0', value: '0' },
    //     { name: '1', value: '1' },
    //     { name: '2', value: '2' },
    //     { name: '3', value: '3' },
    // ]

    const getLvl = new Map([
        [0, 'Отсутствие(+0)'],
        [1, 'Владение(+1к4)'],
        [2, 'Компетентность(+1к8)'],
        [3, 'Мастерство(+1к12)']
    ])

    return (
        <div>
            <text>{nameNavik}</text>
            <MyInputPlus
                f1 = {() => create(+val - 1)}
                f2 = {() => create(+val + 1)}
                style = {{width: "180px"}}
                value = {getLvl.get(val)}
                onChange={e => create(e.target.value)}
                type={"text"}
                placeholder={"От 0 до 3"}
            />
            {/*<ButtonGroup className="mb-2">*/}
            {/*    {radios.map((radio, idx) => (*/}
            {/*        <ToggleButton*/}
            {/*            key={idx}*/}
            {/*            id={`radio${num}-${idx}`}*/}
            {/*            type="radio"*/}
            {/*            variant="outline-primary"*/}
            {/*            name={"radio" + num}*/}
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

export default Navik;
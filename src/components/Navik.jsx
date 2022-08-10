import React, {useState} from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import MyInput from "./UI/MyInput";


const Navik = ({val, create, nameNavik, num}) => {

    const radios = [
        { name: '0', value: '0' },
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
    ]

    return (
        <div>
            <MyInput
                value = {val}
                onChange={e => create(e.target.value)}
                type={"text"}
                placeholder={"0 - отсутствие, 3 - мастерство"}
            />
            <text>{nameNavik}</text>
            <ButtonGroup className="mb-2">
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio${num}-${idx}`}
                        type="radio"
                        variant="outline-primary"
                        name={"radio" + num}
                        value={radio.value}
                        onChange={(e) => create(radio.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </div>
    );
};

export default Navik;
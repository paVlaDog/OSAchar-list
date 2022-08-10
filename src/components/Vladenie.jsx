import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import MyInput from "./UI/MyInput";

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


    return (
        <div>
            <MyInput
                value = {val}
                onChange={e => create(e.target.value)}
                type={"text"}
                placeholder={"0 - отсутствие, 3 - мастер"}
            />
            <text>{name}</text>
            <ButtonGroup className="mb-2">
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radioVladenia${num}-${idx}`}
                        type="radio"
                        variant="outline-primary"
                        name={"radioVladenia" + num}
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

export default Vladenie;
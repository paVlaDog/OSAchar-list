import React, {useState} from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';


const Navik = ({val, create, nameNavik}) => {

    // const radios = [
    //     { name: '0', value: '0' },
    //     { name: '1', value: '1' },
    //     { name: '2', value: '2' },
    //     { name: '3', value: '3' },
    // ]

    return (
        <div>
            <text>{nameNavik}</text>
            {/*<ButtonGroup className="mb-2">*/}
            {/*    {radios.map((radio, idx) => (*/}
            {/*        <ToggleButton*/}
            {/*            key={idx}*/}
            {/*            id={`radio-${idx}`}*/}
            {/*            type="radio"*/}
            {/*            variant="primary"*/}
            {/*            name="radio"*/}
            {/*            value={radio.value}*/}
            {/*            onChange={(e) => create(radio.value)}*/}
            {/*        >*/}
            {/*            {radio.name}*/}
            {/*        </ToggleButton>*/}
            {/*    ))}*/}
            {/*</ButtonGroup>*/}
            <input
                value = {val}
                onChange={e => create(e.target.value)}
                type={"text"}
                placeholder={"0 - отсутствие, 3 - мастерство"}
            />
        </div>
    );
};

export default Navik;
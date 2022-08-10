import React from 'react';
import ToggleButton from "react-bootstrap/ToggleButton";
import MyInput from "./UI/MyInput";

const Harka = ({val, create, name}) => {
    return (
        <form>
            <text>{name}</text>
            <MyInput
                value = {val}
                onChange={e => create(e.target.value)}
                type={"text"}
                placeholder={"Значение"}
            />
        </form>
    );
};

export default Harka;
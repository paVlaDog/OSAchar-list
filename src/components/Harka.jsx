import React from 'react';
import MyInputPlus from "./UI/MyInputPlus";
import MyInputDrop from "./UI/MyInputDrop";

const Harka = ({val, create, name}) => {
    return (
        <form>
            <text>{name}</text>
            <MyInputPlus
                f1 = {() => create(+val - 0.5)}
                f2 = {() => create(+val + 0.5)}
                value = {val}
                onChange={e => create(e.target.value)}
                type={"text"}
                placeholder={"Значение"}
            />
        </form>
    );
};

export default Harka;
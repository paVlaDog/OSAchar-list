import React from 'react';
import MyInputPlus from "./UI/MyInputPlus";

const Harka = ({val, create, name}) => {
    return (
        <form>
            <text>{name}</text>
            <MyInputPlus
                f1 = {() => create(+val - 1)}
                f2 = {() => create(+val + 1)}
                value = {val}
                onChange={e => create(e.target.value)}
                type={"text"}
                placeholder={"Значение"}
            />
        </form>
    );
};

export default Harka;
import React from 'react';
import MyInput from "./UI/MyInput";

const Thing = ({val, cost, create, name}) => {
    return (
        <div>
            <text>{name}</text>
            <MyInput
                value = {val}
                onChange={e => create(e.target.value)}
                type={"text"}
                placeholder={"Введите кол-во предметов"}
            />
            <text>Стоимость:</text>
            <strong>{cost}</strong>
        </div>
    );
};

export default Thing;
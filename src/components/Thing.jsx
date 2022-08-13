import React from 'react';
import MyInputPlus from "./UI/MyInputPlus";

const Thing = ({val, cost, create, name}) => {
    return (
        <div>
            <text>{name}</text>
            <MyInputPlus
                f1 = {() => create(+val - 1)}
                f2 = {() => create(+val + 1)}
                value = {val}
                onChange={e => create(e.target.value)}
                type={"text"}
                placeholder={"От 0 до 3"}
            />

            {/*<MyInput*/}
            {/*    value = {val}*/}
            {/*    onChange={e => create(e.target.value)}*/}
            {/*    type={"text"}*/}
            {/*    placeholder={"Введите кол-во предметов"}*/}
            {/*/>*/}
            <text>Стоимость:</text>
            <strong>{cost}</strong>
        </div>
    );
};

export default Thing;
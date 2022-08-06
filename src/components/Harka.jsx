import React from 'react';

const Harka = ({val, create, name}) => {
    let valu;

    const strangeFunc = function (newVal) {
        localStorage.setItem('harka', newVal);
        create(newVal);
    }

    if (localStorage.getItem('harka') !== '') {
        valu = localStorage.getItem('harka');
    } else {
        valu = val;
    }

    return (
        <form>
            <text>{name}</text>
            <input
                value = {val}
                onChange={e => create(e.target.value)}
                type={"text"}
                placeholder={"Значение"}
            />
        </form>
    );
};

export default Harka;
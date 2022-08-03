import React from 'react';

const Harka = ({val, create, name}) => {
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
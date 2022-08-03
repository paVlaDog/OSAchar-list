import React from 'react';

const Vladenie = ({val, create, name}) => {
    return (
        <div>
            <text>{name}</text>
            <input
                value = {val}
                onChange={e => create(e.target.value)}
                type={"text"}
                placeholder={"0 - отсутствие, 3 - мастер"}
            />
        </div>
    );
};

export default Vladenie;
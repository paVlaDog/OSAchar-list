import React from 'react';

const Bone = ({name, description, val, create}) => {
    return (
        <div>
            <h3>{name}</h3>
            <div>{description}</div>
            <input
                value = {val}
                onChange={e => create(e.target.value)}
                type={"text"}
                placeholder={"1к(Значение)"}
            />
        </div>
    );
};

export default Bone;
import React from 'react';
import Harka from "./Harka";

const AllHarks = ({Harks, create}) => {
    const createVal = (num) => (newVal) => {
        const newHarks = Harks.slice(0)
        newHarks[num] = newVal
        create(newHarks)
    };

    return (
        <div>
            <h3>Характеристики</h3>
            <div>Стартовые значения - от -2 до 4</div>
            <Harka val={Harks[0]} create={createVal(0)} name={"Сила"}/>
            <Harka val={Harks[1]} create={createVal(1)} name={"Телосложение"}/>
            <Harka val={Harks[2]} create={createVal(2)} name={"Ловкость"}/>
            <Harka val={Harks[3]} create={createVal(3)} name={"Интелект"}/>
            <Harka val={Harks[4]} create={createVal(4)} name={"Мудрость"}/>
            <Harka val={Harks[5]} create={createVal(5)} name={"Харизма"}/>
        </div>
    );
};

export default AllHarks;
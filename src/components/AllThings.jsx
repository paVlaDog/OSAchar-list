import React from 'react';
import Thing from "./Thing";

const AllThings = ({Costs, create}) => {
    const namesWeapons = [
        ["Факел", 2],
        ["Веревка", 5]
    ]

    const createVal = (num) => (newVal) => {
        const newCosts = Costs.slice(0)
        newCosts[num] = newVal
        create(newCosts)
    };

    const createThings = function(arg1, arg2, shift){
        const ans = new Array(arg2.length);
        for (let i = 0; i < arg2.length; i++) {
            ans[i] = <Thing val={arg1[i + shift]} cost={arg2[i + shift][1]} create={createVal(i + shift)} name={arg2[i][0]}/>;
        }
        return ans;
    }

    const masLen = [
        namesWeapons.length,
    ];
    let masSumLem = Array(masLen.length + 1);
    masSumLem[0] = 0;
    for (let i = 1; i < masLen.length + 1; i++) {
        masSumLem[i] = masSumLem[i - 1] + masLen[i - 1];
    }


    return (
        <div>
            <h3>Вещи</h3>
            <h4>Оружие</h4>
            {createThings(Costs, namesWeapons, masSumLem[0]).map((a) => a)}
        </div>
    );
};

export default AllThings;
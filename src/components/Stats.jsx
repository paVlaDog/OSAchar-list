import React from 'react';

const Stats = ({boneHits, boneMane, harki}) => {
    const midVal = function (bone) {
        if (bone.length < 3) {
            return +bone;
        } else if (bone.length === 3) {
            return (+bone[2] + 1) / 2;
        } else if (bone.length === 4) {
            return (+bone[2] * 10 + +bone[3] + 1) / 2;
        }
        return "Error";
    }

    return (
        <div>
            <h3>Вычисляемые значения:</h3>
            <div>КФЗ:{10 + +harki[2]}</div>
            <div>КМЗ:{harki[5]}</div>
            <div>ЖСИ:{boneHits + " + " + harki[1]}</div>
            <div>МСИ:{boneMane + " + " + harki[4]}</div>
            <div>Запас хитов(средний):{Math.floor(5 * (midVal(boneHits) + +harki[1]))}</div>
            <div>Запас маны(средний):{Math.floor(5 * (midVal(boneMane) + +harki[4]))}</div>
        </div>
    );
};

export default Stats;
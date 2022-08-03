import React from 'react';
import Navik from "./Navik";

const AllNaviks = ({Naviks, create}) => {
    const createVal = (num) => (newVal) => {
        const newNaviks = Naviks.slice(0)
        newNaviks[num] = newVal
        create(newNaviks)
    };

    const names = [
        "Атлетика (Сила)",
        "Выносливость (Телосложение)",
        "Акробатика (Ловкость)",
        "Ловкость рук (Ловкость)",
        "Незаметность (Ловкость)",
        "Анализ (Интелект)",
        "Эрудиция: Социальные науки (Интелект)",
        "Эрудиция: Естественные науки (Интелект)",
        "Внимательность (Мудрость)",
        "Выживание (Мудрость)",
        "Медицина (Мудрость)",
        "Проницательность (Мудрость)",
        "Уход за животными (Мудрость)",
        "Чувство магии (Мудрость)",
        "Выступление (Харизма)",
        "Запугивание (Харизма)",
        "Обман (Харизма)",
        "Убеждение (Харизма)",
        "Вера (Харизма)",
        "Воля (Харизма)"
    ]
    const createNaviks = function(arg1, arg2){
        const ans = new Array(arg1.length);
        for (let i = 0; i < arg1.length; i++) {
            ans[i] = <Navik val={arg1[i]} create={createVal(i)} name={arg2[i]}/>;
        }
        return ans;
    }

    return (
        <div>
            <h3>Навыки</h3>
            <div>0 - не имеется, 1 - владение, 2 - компетентность, 3 - мастерство</div>
            <div>Со старта можно выбирать не более чем владение</div>
            {createNaviks(Naviks, names).map((a) => a)}
        </div>
    );

};

export default AllNaviks;
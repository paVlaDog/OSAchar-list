import React from 'react';
import Navik from "./Navik";
import Accordion from "react-bootstrap/Accordion";

const AllNaviks = ({Naviks, create, accordionNumber}) => {
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
        "Эрудиция: Естественные науки (Интелект)",
        "Эрудиция: Социальные науки (Интелект)",
        "Бдительность (Мудрость)",
        "Внимательность (Мудрость)",
        "Выживание (Мудрость)",
        "Медицина (Мудрость)",
        "Уход за животными (Мудрость)",
        "Чувство магии (Мудрость)",
        "Вера (Харизма)",
        "Воля (Харизма)",
        "Выступление (Харизма)",
        "Запугивание (Харизма)",
        "Обман (Харизма)",
        "Убеждение (Харизма)"
    ]
    const createNaviks = function(arg1, arg2){
        const ans = new Array(arg1.length);
        for (let i = 0; i < arg1.length; i++) {
            ans[i] = <Navik val={arg1[i]} create={createVal(i)} nameNavik={arg2[i]} num={i}/>;
        }
        return ans;
    }

    return (
        <Accordion.Item eventKey={accordionNumber}>
            <Accordion.Header>Навыки</Accordion.Header>
            <Accordion.Body>
                <div>Если характеристика, к которой прикреплён навык хотя бы +1, то можно получить Владение</div>
                <div>Если характеристика, к которой прикреплён навык хотя бы +5 и у вас хотя бы 45 мощи, то можно получить Компетентность</div>
                <div>Если характеристика, к которой прикреплён навык хотя бы +7 и у вас хотя бы 60 мощи, то можно получить Мастерство</div>
                {createNaviks(Naviks, names).map((a) => a)}
            </Accordion.Body>
        </Accordion.Item>
    );

};

export default AllNaviks;
import React from 'react';
import Vladenie from "./Vladenie";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import {Accordion} from "react-bootstrap";

const AllVladenia = ({Vladenia, create, harki, vladPoints, fellMagic}) => {
    const namesWeapons = [
        "Использование парного рукопашного оружия (Ученик/Ветеран/Мастер) (Сила)",
        "Использование двуручного рукопашного оружия (Ученик/Ветеран/Мастер) (Сила)",
        "Использование простого рукопашного оружия (Ученик/Ветеран/Мастер) (Сила)",
        "Использование фехтовального оружия (Ученик/Ветеран/Мастер) (Ловкость)",
        "Использование луков и арбалетов (Ученик/Ветеран/Мастер) (Ловкость)",
        "Использование универсального, притягивающего и нестандартного дальнобойного оружия (Ученик/Ветеран/Мастер) (Ловкость)"
    ]
    const namesArmor = [
        "Использование лёгких доспехов (Ловкость)",
        "Испольование средних доспехов (Телосложение)",
        "Использование тяжёлых доспехов (Сила)"
    ]
    const namesMistic = [
        "Магия Водоворота душ (Ученик/Адепт/Мастер) (Мудрость)",
        "Магия Потоков первородной магии (Ученик/Адепт/Мастер) (Мудрость)",
        "Магия Вечных пустошей (Ученик/Адепт/Мастер) (Мудрость)",
        "Магия Великого урагана (Ученик/Адепт/Мастер) (Мудрость)",
        "Магия Солнечного горнила (Ученик/Адепт/Мастер) (Мудрость)",
        "Магия Сияния (Ученик/Адепт/Мастер) (Мудрость)",
        "Магия Грани реальности (Ученик/Адепт/Мастер) (Мудрость)"
    ]
    const namesTool = [
        "Взлом/владение отмычками (Ловкость рук(Ловкость))",
        "Владение ловушками (Ловкость рук(Ловкость))",
        "Владение играми (Анализ/Ловкость рук(Ловкость))",
        "Карманные кражи (Ловкость рук(Ловкость))",
        "Владение инструментами плотника (Ловкость)",
        "Владение инструментами ювелира (Ловкость)",
        "Владение инструментами гончара (Ловкость)",
        "Владение инструментами ткача (Ловкость)",
        "Владение инструментами пивовара (Мудрость)",
        "Владение инструментами кузнеца (Атлетика(Сила))",
        "Владение музыкальными инструментами (Харизма/Интелект)",
        "Владение набором фокусника (Выступление/Лоавкость рук(Ловкость))",
        "Владение набором артиста(включая грим) (Харизма)"
    ]
    const namesLore = [
        "Знание улиц (Эрудиция: Социальные науки(Интелект))",
        "Знание высшего света (Эрудиция: Социальные науки(Интелект))",
        "Знание искусства (Эрудиция: Социальные науки(Интелект))",
        "Знание географии (Эрудиция: Социальные науки(Интелект))",
        "Знание истории (Эрудиция: Социальные науки(Интелект))",
        "Знание теологии (Эрудиция: Социальные науки(Интелект))",
        "Знание технологий (Эрудиция: Естественные науки(Интелект))",
        "Знаний магических наук (Эрудиция: Естественные науки(Интелект))",
        "Знание точных наук (Эрудиция: Естественные науки(Интелект))",
        "Знание природы (Эрудиция: Естественные науки(Интелект))",
        "Знание планов (Эрудиция: Естественные науки(Интелект))"
    ]
    const namesLang = [
        "Знание общего языка (Харизма/Эрудиция: Социальные науки(Интелект))",
        "Знание человеческого языка (Харизма/Эрудиция: Социальные науки(Интелект))",
        "Знание языка Диких (Харизма/Эрудиция: Социальные науки(Интелект))",
        "Знание говора Морозных земель (Харизма/Эрудиция: Социальные науки(Интелект))",
        "Знание рыков Гноллов (Харизма/Эрудиция: Социальные науки(Интелект))",
        "Знание языка Ракшасс (Харизма/Эрудиция: Социальные науки(Интелект))",
        "Знание языка Арахнид (Харизма/Эрудиция: Социальные науки(Интелект))",
        "Знание языка Кобольдов (Харизма/Эрудиция: Социальные науки(Интелект))",
        "Знание языка Капп (Харизма/Эрудиция: Социальные науки(Интелект))",
        "Знание языка Сарангаев (Харизма/Эрудиция: Социальные науки(Интелект))",
        "Знание змеинного наречия (Харизма/Эрудиция: Социальные науки(Интелект))"
    ]
    const namesOther = [
        "Кулачный бой (Сила)",
        "Борьба (Атлетика(Сила))",
        "Травничество (Медицина(Мудрость))",
        "Мореходство (Мудрость/Интелект)"
    ]

    const createVal = (num) => (newVal) => {
        const newNaviks = Vladenia.slice(0)
        newNaviks[num] = newVal
        create(newNaviks)
    };

    const createVladenia = function(arg1, arg2, shift, type){
        const ans = new Array(arg2.length);
        for (let i = 0; i < arg2.length; i++) {
            ans[i] = <Vladenie val={arg1[i + shift]} create={createVal(i + shift)} name={arg2[i]} type={type} num={shift+i}/>;
        }
        return ans;
    }

    const sumVladenia = function(shift1, shift2){
        let sum = 0;
        for (let i = shift1; i < shift2; i++) {
            sum += +Vladenia[i];
        }
        return sum;
    }

    const masLen = [
        namesWeapons.length,
        namesArmor.length,
        namesMistic.length,
        namesTool.length,
        namesLore.length,
        namesLang.length,
        namesOther.length
    ];


    let masSumLem = Array(masLen.length + 1);
    masSumLem[0] = 0;
    for (let i = 1; i < masLen.length + 1; i++) {
        masSumLem[i] = masSumLem[i - 1] + masLen[i - 1];
    }

    const createAccItem = function (num, header, body) {
        return (
            <AccordionItem eventKey={num}>
                <AccordionHeader>{header}</AccordionHeader>
                {body}
            </AccordionItem>
        )
    }

    const weapHark = Math.max(harki[0], harki[2]);
    const maksRankWeapons = (weapHark < 1)  ? "0(запрещено изучать)" :
                            (weapHark < 6) ? "1(Ученик)" :
                            (weapHark < 8) ? "2(Ветеран)" :
                            "3(Мастер)";
    const maksRankMistic =  (harki[4] < 1)  ? "0(запрещено изучать)" :
                            (harki[4] < 6) ? "1(Ученик)" :
                            (harki[4] < 8) ? "2(Адепт)" :
                            "3(Мастер)";
    const maksCountMistic = (fellMagic < 1) ? "0(запрещено изучать)" :
                            (fellMagic < 2) ? "1 школа" :
                            (fellMagic < 3) ? "2 школы" :
                            "3 школы";


    return (
        <Accordion>
            <AccordionItem eventKey={"vladenia"}>
                <AccordionHeader>Владения</AccordionHeader>
                <AccordionBody>
                    <h3>{"Очков владений осталось: " + vladPoints} </h3>
                    <Accordion alwaysOpen>
                        {createAccItem(
                            1, "Оружейные",
                            <AccordionBody>
                                <div>0 - не имеется, 1 - ученик, 2 - ветеран, 3 - мастер</div>
                                <div>Максимальный ранг - ученик при СИЛ/ЛОВ хотя бы +1, Адепт при СИЛ/ЛОВ хотя бы +6, Мастер при СИЛ/ЛОВ хотя бы +8.
                                    Текущий максимальный ранг: {maksRankWeapons}</div>
                                <div>На максимальное кол-во ограничения не накладываются</div>
                                {createVladenia(Vladenia, namesWeapons, masSumLem[0], "quarta").map((a) => a)}
                            </AccordionBody>
                        )}
                        {createAccItem(
                            2, "Доспехи",
                            <AccordionBody>
                                <div>0 - не имеется, 1 - имеется</div>
                                <div>При отсутвии владения вы получаете помеху на любые действия в этом типе доспехов</div>
                                {createVladenia(Vladenia, namesArmor, masSumLem[1], "double").map((a) => a)}
                            </AccordionBody>
                        )}
                        {createAccItem(
                            3, "Мистические",
                            <AccordionBody>
                                <div>0 - не имеется, 1 - ученик, 2 - ветеран, 3 - мастер</div>
                                <div>Максимальный ранг - ученик при МДР хотя бы +1, Адепт при МДР хотя бы +6, Мастер при МДР хотя бы +8.
                                    Текущий максимальный ранг: {maksRankMistic}</div>
                                <div>Максимальное кол-во школ = уровню навыка Чувство магии.
                                    Текущее: {maksCountMistic}</div>
                                {createVladenia(Vladenia, namesMistic, masSumLem[2], "quarta").map((a) => a)}
                            </AccordionBody>
                        )}
                        {createAccItem(
                            4, "Плутовские и владения инструментами",
                            <AccordionBody>
                                <div>0 - не имеется, 1 - имеется</div>
                                {createVladenia(Vladenia, namesTool, masSumLem[3], "double").map((a) => a)}
                            </AccordionBody>
                        )}
                        {createAccItem(
                            5, "Знания",
                            <AccordionBody>
                                <div>0 - не имеется, 1 - имеется</div>
                                {createVladenia(Vladenia, namesLore, masSumLem[4], "double").map((a) => a)}
                            </AccordionBody>
                        )}
                        {createAccItem(
                            6, "Языки",
                            <AccordionBody>
                                <div>0 - не имеется, 1 - имеется</div>
                                {createVladenia(Vladenia, namesLang, masSumLem[5], "double").map((a) => a)}
                            </AccordionBody>
                        )}
                        {createAccItem(
                            7, "Прочее",
                            <AccordionBody>
                                <div>0 - не имеется, 1 - имеется</div>
                                {createVladenia(Vladenia, namesOther, masSumLem[6], "double").map((a) => a)}
                            </AccordionBody>
                        )}
                    </Accordion>

                </AccordionBody>
            </AccordionItem>
        </Accordion>
    );

};

export default AllVladenia;
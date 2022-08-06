import React, {useEffect, useState} from 'react';
import AllHarks from "./components/AllHarks";
import AllNaviks from "./components/AllNaviks";
import AllVladenia from "./components/AllVladenia";
import Bone from "./components/Bone";
import Stats from "./components/Stats";
import AllThings from "./components/AllThings";
import "bootstrap/dist/css/bootstrap.min.css"
import Accordion from 'react-bootstrap/Accordion';


function App() {
    const startFill = (len, startValue, str) => {
        let gettingHarks = Array(len).fill(startValue);
        for (let i = 0; i < gettingHarks.length; i++) {
            if (localStorage.getItem(str + i) !== null) {
                gettingHarks[i] = localStorage.getItem(str + i);
            }
        }
        return gettingHarks;
    }
    const saveValue = (mas, str) => {
        for (let i = 0; i < mas.length; i++) {
            localStorage.setItem(str + i, mas[i]);
        }
    }

    const [harks, setHarks] = useState(() => {
        const initialState = startFill(6, 0, "harks");
        return initialState;
    });
    const [naviks, setNaviks] = useState(() => {
        const initialState = startFill(20, 0, "naviks");
        return initialState;
    });
    const [vladenia, setVladenia] = useState(() => {
        const initialState = startFill(100, 0, "vladenia");
        return initialState;
    });
    const [boneHits, setBoneHits] = useState(() => {
        const initialState = startFill(1, "1к6", "boneHits")[0];
        return initialState;
    });
    const [boneMane, setBoneMane] = useState(() => {
        const initialState = startFill(1, "0", "boneMane")[0];
        return initialState;
    });
    const [things, setThings] = useState(() => {
        const initialState = startFill(200, 0, "things");
        return initialState;
    });
    const boneHitsCost = (boneHits === "1к6" ? 0 : (boneHits === "1к8" ? 2 : (boneHits === "1к10" ? 5 : 25)))
    const boneHitsBonus = (boneHits === "1к6" ? 0 : (boneHits === "1к8" ? 1 : (boneHits === "1к10" ? 2 : 0)))
    const skillPointsLast = 25 - 2*harks.reduce((a, b) => +a + +b) - naviks.reduce((a, b) => +a + +b) - boneHitsCost;
    const skillVladeniiLast = 4 + +boneHitsBonus + +harks[3] - vladenia.reduce((a, b) => +a + +b);
    const createHarks = (newMas) => {setHarks(newMas);saveValue(newMas, "harks");};
    const createNaviks = (newMas) => {setNaviks(newMas);saveValue(newMas, "naviks");};
    const createVladenia = (newMas) => {setVladenia(newMas);saveValue(newMas, "vladenia");};
    const createBoneHits = (newMas) => {setBoneHits(newMas);saveValue([newMas], "boneHits");};
    const createBoneMane = (newMas) => {setBoneMane(newMas);saveValue([newMas], "boneMane");};
    const createThings = (newMas) => {setThings(newMas);saveValue(newMas, "things");};

    return (
    <div className="App">
        <h3>{"Очков навыков осталось: " + skillPointsLast} </h3>
        <Accordion alwaysOpen>
            <AllHarks Harks={harks} create={createHarks} accordionNumber={1}/>
            <AllNaviks Naviks={naviks} create={createNaviks} accordionNumber={2}/>
            <Bone name={"Кость хитов"}
                  description={"Со старта - 1к6, 1к8 или 1к10"}
                  val={boneHits}
                  create={createBoneHits}
                  accordionNumber={3}/>
            <Bone name={"Кость маны"}
                  description={"Если вы не заклинатель - 0. Если заклинатель - указанное в классе значение"}
                  val={boneMane}
                  create={createBoneMane}
                  accordionNumber={4}/>
            <Stats harki={harks} boneHits={boneHits} boneMane={boneMane} accordionNumber={5}/>
        </Accordion>

        <h5>Не использующее очки навыков:</h5>
        <AllVladenia Vladenia={vladenia} create={createVladenia} harki={harks} vladPoints={skillVladeniiLast}/>
        <AllThings Things={things} create={createThings}/>
    </div>
    );
}

export default App;

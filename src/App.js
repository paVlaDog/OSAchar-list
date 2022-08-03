import React, {useState} from 'react';
import AllHarks from "./components/AllHarks";
import AllNaviks from "./components/AllNaviks";
import AllVladenia from "./components/AllVladenia";
import Bone from "./components/Bone";
import Stats from "./components/Stats";
import AllThings from "./components/AllThings";

function App() {

    const [harks, setHarks] = useState(Array.from("000000"));
    const [naviks, setNaviks] = useState(Array.from("00000000000000000000"));
    const [vladenia, setVladenia] = useState(Array.from("000000000000000000000000000000000000000000000000000000000000"));
    const [boneHits, setBoneHits] = useState("1к6");
    const [boneMane, setBoneMane] = useState("0");
    const [costs, setCosts] = useState(Array.from("00"));
    const moneyLast = 100 - costs.reduce((a, b) => +a + +b);
    const boneHitsCost = (boneHits === "1к6" ? 0 : (boneHits === "1к8" ? 2 : (boneHits === "1к10" ? 5 : 25)))
    const boneHitsBonus = (boneHits === "1к6" ? 0 : (boneHits === "1к8" ? 1 : (boneHits === "1к10" ? 2 : 0)))
    const skillPointsLast = 25 - 2*harks.reduce((a, b) => +a + +b) - naviks.reduce((a, b) => +a + +b) - boneHitsCost;
    const skillVladeniiLast = 4 + +boneHitsBonus + +harks[3] - vladenia.reduce((a, b) => +a + +b);
    const createHarks = (newHarks) => setHarks(newHarks);
    const createNaviks = (newNaviks) => setNaviks(newNaviks);
    const createBoneHits = (newVal) => setBoneHits(newVal);
    const createBoneMane = (newVal) => setBoneMane(newVal);
    const createVladenia = (newVal) => setVladenia(newVal);
    const createCosts = (newVal) => setCosts(newVal);

    return (
    <div className="App">
        <h3>{"Очков навыков осталось: " + skillPointsLast} </h3>
        <AllHarks Harks={harks} create={createHarks}/>
        <AllNaviks Naviks={naviks} create={createNaviks}/>
        <Bone name={"Кость хитов"}
              description={"Со старта - 1к6, 1к8 или 1к10"}
              val={boneHits}
              create={createBoneHits}/>
        <Bone name={"Кость маны"}
              description={"Если вы не заклинатель - 0. Если заклинатель - указанное в классе значение"}
              val={boneMane}
              create={createBoneMane}/>
        <Stats harki={harks} boneHits={boneHits} boneMane={boneMane}/>
        <h3>{"Очков владений осталось: " + skillVladeniiLast} </h3>
        <AllVladenia Vladenia={vladenia} create={createVladenia} harki={harks}/>
        <AllThings Costs={costs} create={createCosts}/>
    </div>
    );
}

export default App;
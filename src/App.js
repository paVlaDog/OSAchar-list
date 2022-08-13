import React, {useEffect, useState} from 'react';
import AllHarks from "./components/AllHarks";
import AllNaviks from "./components/AllNaviks";
import AllVladenia from "./components/AllVladenia";
import Bone from "./components/Bone";
import Stats from "./components/Stats";
import AllThings from "./components/AllThings";
import "bootstrap/dist/css/bootstrap.min.css"
import Accordion from 'react-bootstrap/Accordion';
import "./styles/App.css"
import NavMainStats from "./components/NavMainStats";
import CharacterClass from "./components/CharacterClass";
import CharacterRase from "./components/CharacterRase";
import Skills from "./components/Skills";
import Spells from "./components/Spells";
import Aspects from "./components/Aspects";
import BoneHits from "./components/BoneHits";
import BoneMane from "./components/BoneMane";
import Wounds from "./components/Wounds";

function midVal(bone) {
    if (bone.length < 3) {
        return +bone;
    } else if (bone.length === 3) {
        return (+bone[2] + 1) / 2;
    } else if (bone.length === 4) {
        return (+bone[2] * 10 + +bone[3] + 1) / 2;
    }
    return "Error";
}


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

    const [level, setLevel] = useState(() => startFill(1, "1", "level")[0]);
    const [addSkills, setAddSkills] = useState(() => startFill(1, "1", "addSkills")[0]);
    const [harks, setHarks] = useState(() => startFill(6, 0, "harks"));
    const wholeHarks = harks.map(Math.floor);
    const [naviks, setNaviks] = useState(() => startFill(20, 0, "naviks"));
    const [vladenia, setVladenia] = useState(() => startFill(100, 0, "vladenia"));
    const [boneHits, setBoneHits] = useState(() => startFill(1, "1к6", "boneHits")[0]);
    const [boneMane, setBoneMane] = useState(() => startFill(1, "0", "boneMane")[0]);
    const [things, setThings] = useState(() => startFill(200, 0, "things"));
    const [addVal, setAddVal] = useState(() => startFill(20, 0, "addVal"));
    const [navStats, setNavStats] = useState(() => startFill(10, 0, "navStats"));
    const [characterClass, setCharacterClass] = useState(() => startFill(1, "", "characterClass")[0]);
    const [characterRace, setCharacterRace] = useState(() => startFill(1, "", "characterRace")[0]);
    const [skills, setSkills] = useState(() => startFill(1, "", "skills")[0]);
    const [spells, setSpells] = useState(() => startFill(1, "", "spells")[0]);
    const [wounds, setWounds] = useState(() => startFill(1, "", "wounds")[0]);
    const [aspects, setAspects] = useState(() => startFill(1, "", "aspects")[0]);
    const boneHitsCost = (boneHits === "1к4" ? -2 :(boneHits === "1к6" ? 0 : (boneHits === "1к8" ? 2 : (boneHits === "1к10" ? 5 : 25))))
    const boneHitsBonus = (boneHits === "1к6" ? 0 : (boneHits === "1к8" ? 1 : (boneHits === "1к10" ? 2 : 0)))
    const skillPointsLast = 25 + 2*(level - 1) - 2*harks.reduce((a, b) => +a + +b) - naviks.reduce((a, b) => +a + +b) - boneHitsCost - addSkills;
    const skillVladeniiLast = 4 + +boneHitsBonus + +wholeHarks[3] - vladenia.reduce((a, b) => +a + +b);
    const maxHits = Math.floor((4 + +level) * (midVal(boneHits) + +wholeHarks[1] + +addVal[2]) + +addVal[4]);
    const maxMane = Math.floor((4 + +level) * (midVal(boneMane) + +wholeHarks[4] + +addVal[3]) + +addVal[5]);
    const createLevel = (newMas) => {setLevel(newMas);saveValue(newMas, "level");};
    const createAddSkills = (newMas) => {setAddSkills(newMas);saveValue([newMas], "addSkills");};
    const createHarks = (newMas) => {setHarks(newMas);saveValue(newMas, "harks");};
    const createNaviks = (newMas) => {setNaviks(newMas);saveValue(newMas, "naviks");};
    const createVladenia = (newMas) => {setVladenia(newMas);saveValue(newMas, "vladenia");};
    const createBoneHits = (newMas) => {setBoneHits(newMas);saveValue([newMas], "boneHits");};
    const createBoneMane = (newMas) => {setBoneMane(newMas);saveValue([newMas], "boneMane");};
    const createThings = (newMas) => {setThings(newMas);saveValue(newMas, "things");};
    const createAddVal = (newMas) => {setAddVal(newMas);saveValue(newMas, "addVal");};
    const createNavStats = (newMas) => {setNavStats(newMas);saveValue(newMas, "navStats");};
    const createCharacterClass = (newMas) => {setCharacterClass(newMas);saveValue([newMas], "characterClass");};
    const createCharacterRace = (newMas) => {setCharacterRace(newMas);saveValue([newMas], "characterRace");};
    const createSkills = (newMas) => {setSkills(newMas);saveValue([newMas], "skills");};
    const createSpells = (newMas) => {setSpells(newMas);saveValue([newMas], "spells");};
    const createWounds = (newMas) => {setWounds(newMas);saveValue([newMas], "wounds");};
    const createAspects = (newMas) => {setAspects(newMas);saveValue([newMas], "aspects");};


    return (
    <div className="App">
        <NavMainStats
            level={level}
            createLevel={createLevel}
            skillPointsLast={skillPointsLast}
            navStats={navStats}
            create={createNavStats}
            addVal={addVal}
            maxHits={maxHits}
            maxMane={maxMane}
        />
        <div className={"borderR1"}>
            <Accordion className={"borderR2"} alwaysOpen>
                <AllHarks Harks={harks} create={createHarks} accordionNumber={1} level={level}/>
                <AllNaviks Naviks={naviks} create={createNaviks} accordionNumber={2}/>
                <BoneHits boneHits={boneHits} create={createBoneHits}/>
                <BoneMane boneMane={boneMane} create={createBoneMane}/>
                <Stats harki={wholeHarks} boneHits={boneHits} boneMane={boneMane} accordionNumber={5} addVal={addVal} create={createAddVal} level={level}/>
            </Accordion>
        </div>

        <div className={"borderR1"}>
            <h5 className={"borderR2"}>Не использующее очки навыков:</h5>
            <AllVladenia className={"borderR2"}
                         Vladenia={vladenia}
                         create={createVladenia}
                         harki={wholeHarks}
                         vladPoints={skillVladeniiLast}
                         harks={wholeHarks}
                         fellMagic={naviks[13]}
                         level={level}
            />
            <AllThings className={"borderR2"} Things={things} create={createThings}/>
            <CharacterClass characterClass={characterClass} create={createCharacterClass}></CharacterClass>
            <CharacterRase characterRace={characterRace} create={createCharacterRace}></CharacterRase>
            <Skills skills={skills} create={createSkills} addSkills={addSkills} createAddSkills={createAddSkills}></Skills>
            <Wounds wounds={wounds} create={createWounds}></Wounds>
            <Spells spells={spells} create={createSpells} vladenia={vladenia} int={wholeHarks[3]}></Spells>
            <Aspects aspects={aspects} create={createAspects} ></Aspects>
        </div>
    </div>
    );
}

export default App;

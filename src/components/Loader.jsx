import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import MyTextArea from "./UI/MyTextArea";

const Loader = ({allData, name}) => {

    const glueOne = (val) => {
        if (typeof val === 'object') {
            return ("(^!^)" + (val.join(",%")));
        } else {
            return val;
        }
    }

    const parseOne = (val) => {
        if (val.length > 4 && val.slice(0, 5) === "(^!^)") {
            return val.slice(5).split(",%");
        } else {
            return val;
        }
    }

    const glue = () => {
        let trash = allData[0].map((a) => glueOne(a))
        return trash.join('!@!');
    }

    const parse = (val) => {
        let mas = val.split("!@!");
        for (let i = 0; i < allData[1].length; i++) {
            allData[1][i](parseOne(mas[i]));
        }
    }


    function DumpCharacter(allData) {

        //Convert JSON Array to string.
        //var json = JSON.stringify(allData);

        //Convert JSON string to BLOB.
        //json = [json];
        var blob1 = new Blob([allData], { type: "text/json;charset=utf-8" });

        //Check the Browser.
        var isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob1, "Customers.txt");
        } else {
            var url = window.URL || window.webkitURL;
            var a = document.createElement("a");
            a.download = name + ".txt";
            a.href = url.createObjectURL(blob1);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }

    async function DowloadCharacter (e) {
        if(!e.target.files.length){
            return
        }
        const filesList = Array.from(e.target.files)
        const fileText = await filesList[0].text()

        parse(fileText)
        e.target.files = [];
    }

    function resetCharacter (e) {
        parse(    "35!@!0!@!(^!^)0,%0,%0,%0,%0,%0!@!(^!^),%,%,%,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0!@!(^!^)0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0!@!1к6!@!0!@!(^!^)0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0!@!(^!^)0,%0,%0!@!(^!^)0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0(^!^)!@!(^!^),%0,%0,%1,%0,%0,%0,%0,%0,%0(^!^)!@!!@!!@!!@!!@!!@!")
    }



    return (
        <Accordion>
            <Accordion.Item eventKey={"loader"}>
                <Accordion.Header>Загрузка/Сохранение/Сброс:</Accordion.Header>
                <Accordion.Body>
                    {/*<MyTextArea*/}
                    {/*    style={{width: "100%", height: "400px", textAlign: "start"}}*/}
                    {/*    value = {glue()}*/}
                    {/*    onChange={e => {parse(e.target.value)}}*/}
                    {/*    placeholder={"Тебе нечего сохранять?"}/>*/}
                    {/*<div>Для сброса:</div>*/}
                    {/*<div>35!@!0!@!(^!^)0,%0,%0,%0,%0,%0!@!(^!^),%,%,%,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0!@!(^!^)0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0!@!1к6!@!0!@!(^!^)0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0!@!(^!^)0,%0,%0!@!(^!^)0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0,%0(^!^)!@!(^!^),%0,%0,%1,%0,%0,%0,%0,%0,%0(^!^)!@!!@!!@!!@!!@!!@!</div>*/}
                    {/*/!*style={{backgroundColor: }}*!/*/}
                    <div>
                        <input type="button" style={{backgroundColor: "royalblue", borderRadius: "5px", color: "white"}} value="Сохранить персонажа" onClick={e => {DumpCharacter(glue())}}/>
                    </div>
                    <div>
                        Загрузить персонажа:
                    </div>
                    <input style={{display: "block", backgroundColor: "royalblue", borderRadius: "5px", color: "white"}} type="file" onChange={DowloadCharacter}/>
                    <div>
                        <input type="button" style={{backgroundColor: "royalblue", borderRadius: "5px", color: "white"}} value="Сброс персонажа" onClick={resetCharacter}/>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Loader;
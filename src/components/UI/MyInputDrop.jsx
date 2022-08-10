import React from 'react';
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import classes from "./MyInputDrop.module.css";
import {DropdownButton} from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from 'react-bootstrap/Dropdown';

const MyInputDrop = React.forwardRef(({create, val, ...props}, ref) => {
    return (
        <>
            <MyInput
                ref={ref}
                className={classes.myInputDrop}
                {...props}/>
            <DropdownButton style={{height: "35px", padding: "0px 0px 5px 0px", margin: "0px"}}
                            as={ButtonGroup} title=""
                            id="bg-nested-dropdown">
                <Dropdown.Item eventKey="3" onClick={e => {
                    e.preventDefault()
                    create(+val - 10)
                }}>-10</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={e => {
                    e.preventDefault()
                    create(+val - 5)
                }}>-5</Dropdown.Item>
                <Dropdown.Item eventKey="1" onClick={e => {
                    e.preventDefault()
                    create(+val - 1)
                }}>-1</Dropdown.Item>
                <Dropdown.Item eventKey="1" onClick={e => {
                    e.preventDefault()
                    create(+val + 1)
                }}>+1</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={e => {
                    e.preventDefault()
                    create(+val + 5)
                }}>+5</Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={e => {
                    e.preventDefault()
                    create(+val + 10)
                }}>+10</Dropdown.Item>
            </DropdownButton>
            {/*<MyButton style={{margin: "5px 0px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"}} onClick={e => {*/}
            {/*    e.preventDefault()*/}
            {/*    f2()*/}
            {/*}}>+</MyButton>*/}
        </>
    );
});

export default MyInputDrop;
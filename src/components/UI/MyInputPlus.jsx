import React from 'react';
import classes from "./MyInputPlus.module.css";
import MyInput from "./MyInput";
import MyButton from "./MyButton";

const MyInputPlus = React.forwardRef(({f1, f2, ...props}, ref) => {
    return (
        <>
            <MyButton style={{margin: "5px 0px 5px 5px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px"}} onClick={e => {
                e.preventDefault()
                f1()
            }}>-</MyButton>
            <MyInput
                     ref={ref}
                     className={classes.myInputPlus}
                     {...props}/>
            <MyButton style={{margin: "5px 0px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"}} onClick={e => {
                e.preventDefault()
               f2()
            }}>+</MyButton>
        </>
    );
});

export default MyInputPlus;
import {useState} from "react";


type OnOfType = {
    callBackControl: (value:boolean)=>void
    contrOn: boolean
}

export const OnOfController:React.FC<OnOfType> = ({callBackControl, contrOn}) =>{
    const btnPanel = {
        display: "flex",
        alignItems: "center",
        fontSize: "18px",
        color: "white"
    }
    const btnTest = {
        cursor: "pointer",
        width: "60px",
        height: "30px",
        border: "2px solid black",
        backgroundColor: contrOn ? "green":"black"
    }
    const btnTest2 = {
        cursor: "pointer",
        width: "60px",
        height: "30px",
        border: "2px solid black",
        backgroundColor: contrOn ? "black":"green"
    }
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "1px outset red",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: contrOn ? "black" : "green"
    }
    const clickOF = () =>{
        callBackControl(false)
    }
    const clickOn = () =>{
        callBackControl(true)
    }
    return(
        <div>
            <div style={btnPanel}>
                <div onClick={clickOn} style={btnTest}>on</div>
                <div onClick={clickOF} style={btnTest2}>off</div>
                <div style={indicatorStyle}></div>
            </div>
        </div>
    )
}
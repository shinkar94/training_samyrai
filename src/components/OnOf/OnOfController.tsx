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
        backgroundColor: contrOn ? "gray" : "white",
        color: "black",
        boxShadow: contrOn ? "inset 0px 0px 5px black" : "0px 0px 2px black",
        borderRadius: "2px 0px 0px 2px",
        transition: "0.5s"
    }
    const btnTest2 = {
        cursor: "pointer",
        width: "60px",
        height: "30px",
        backgroundColor: contrOn ? "white":"gray",
        color: "black",
        boxShadow: contrOn ? "0px 0px 2px black" : "inset 0px 0px 5px black",
        borderRadius: "2px 0px 0px 2px",
        transition: "0.5s"

    }
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: contrOn ? "red" : "white",
        boxShadow: contrOn ? "0px 0px 15px red" : "inset 0px 0px 5px black",
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
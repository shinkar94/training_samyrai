import {useState} from "react";


type OnOfType = {
    // on: boolean
}

export const OnOf = () =>{
    const [on, setOn] = useState<boolean>(false)
    const clickON = (value:boolean) =>{
        setOn(value)
    }
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
        backgroundColor: on ? "green":"black"
    }
    const btnTest2 = {
        cursor: "pointer",
        width: "60px",
        height: "30px",
        border: "2px solid black",
        backgroundColor: on ? "black":"green"
    }
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "1px outset red",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "black" : "green"
    }
    return(
        <div>
            <div style={btnPanel}>
                <div onClick={()=>{clickON(true)}} style={btnTest}>on</div>
                <div onClick={()=>{clickON(false)}} style={btnTest2}>off</div>
                <div style={indicatorStyle}></div>
            </div>
        </div>
    )
}
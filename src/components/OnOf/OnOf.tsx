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
        backgroundColor: on ? "gray" : "white",
        color: "black",
        boxShadow: on ? "inset 0px 0px 5px black" : "0px 0px 2px black",
        borderRadius: "2px 0px 0px 2px",
        transition: "0.5s"
    }
    const btnTest2 = {
        cursor: "pointer",
        width: "60px",
        height: "30px",
        backgroundColor: on ? "white":"gray",
        color: "black",
        boxShadow: on ? "0px 0px 2px black" : "inset 0px 0px 5px black",
        borderRadius: "2px 0px 0px 2px",
        transition: "0.5s"

    }
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "red" : "white",
        boxShadow: on ? "0px 0px 15px red" : "inset 0px 0px 5px black",
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
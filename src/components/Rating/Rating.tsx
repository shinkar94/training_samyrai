import React, {useState} from "react";

export function Rating() {
    const [countStar, setCount] = useState<number>(0);
    const addStar = (countStar: number) =>{
        setCount(countStar)
    }
    return (
        <div>
            <Start selected={countStar > 0} countStar={1} callBack={addStar}/>
            <Start selected={countStar > 1} countStar={2} callBack={addStar}/>
            <Start selected={countStar > 2} countStar={3} callBack={addStar}/>
            <Start selected={countStar > 3} countStar={4} callBack={addStar}/>
            <Start selected={countStar > 4} countStar={5} callBack={addStar}/>
        </div>
    )
}

type StartPropsType = {
    selected: boolean
    countStar: number
    callBack: (count:number)=>void
}

function Start(props: StartPropsType) {
    const addStarHandler =(countStar:number) =>{
        props.callBack(countStar)
    }
    return props.selected === true
        ? <span onClick={()=>addStarHandler(props.countStar)}><b>Start </b></span>
        : <span onClick={()=>addStarHandler(props.countStar)}>Start </span>;
}
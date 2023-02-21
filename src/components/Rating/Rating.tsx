import React, {useState} from "react";

export function Rating() {
    const [countStar, setCount] = useState<number>(0);
    return (
        <div>
            <Start selected={countStar > 0} countStar={1} callBack={setCount}/>
            <Start selected={countStar > 1} countStar={2} callBack={setCount}/>
            <Start selected={countStar > 2} countStar={3} callBack={setCount}/>
            <Start selected={countStar > 3} countStar={4} callBack={setCount}/>
            <Start selected={countStar > 4} countStar={5} callBack={setCount}/>
        </div>
    )
}

type StartPropsType = {
    selected: boolean
    countStar: 1|2|3|4|5
    callBack: (count: 1|2|3|4|5)=>void
}

const Start:React.FC<StartPropsType> = ({selected, countStar, callBack}) => {
    return <span onClick={()=>{callBack(countStar)}}>{selected ? <b>Star</b> : 'Star'}</span>
}
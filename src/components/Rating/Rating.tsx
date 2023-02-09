import React from "react";

type RatingPropsType = {
    countStar: 0|1 | 2 | 3 | 4 | 5;
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering");
    return (
        <div>
            <Start selected={props.countStar > 0}/>
            <Start selected={props.countStar > 1}/>
            <Start selected={props.countStar > 2}/>
            <Start selected={props.countStar > 3}/>
            <Start selected={props.countStar > 4}/>
        </div>
    )
    return (
        <div>
            <Start selected={false}/>
            <Start selected={false}/>
            <Start selected={false}/>
            <Start selected={false}/>
            <Start selected={false}/>
        </div>
    )
}

type StartPropsType = {
    selected: boolean
}

function Start(props: StartPropsType) {
    return props.selected === true ? <span><b>Start </b></span> : <span>Start </span>;
}
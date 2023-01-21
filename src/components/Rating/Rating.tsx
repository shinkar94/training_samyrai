import React from "react";

type RatingPropsType = {
    countStar: 0|1 | 2 | 3 | 4 | 5;
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering");
    if(props.countStar === 1){
        return (
            <div>
                <Start selected={true}/>
                <Start selected={false}/>
                <Start selected={false}/>
                <Start selected={false}/>
                <Start selected={false}/>
            </div>
        )
    }
    if(props.countStar === 2){
        return (
            <div>
                <Start selected={true}/>
                <Start selected={true}/>
                <Start selected={false}/>
                <Start selected={false}/>
                <Start selected={false}/>
            </div>
        )
    }
    if(props.countStar === 3){
        return (
            <div>
                <Start selected={true}/>
                <Start selected={true}/>
                <Start selected={true}/>
                <Start selected={false}/>
                <Start selected={false}/>
            </div>
        )
    }
    if(props.countStar === 4){
        return (
            <div>
                <Start selected={true}/>
                <Start selected={true}/>
                <Start selected={true}/>
                <Start selected={true}/>
                <Start selected={false}/>
            </div>
        )
    }
    if(props.countStar === 5){
        return (
            <div>
                <Start selected={true}/>
                <Start selected={true}/>
                <Start selected={true}/>
                <Start selected={true}/>
                <Start selected={true}/>
            </div>
        )
    }
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
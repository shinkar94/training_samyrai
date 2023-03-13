import React, {useState} from "react";
import star from '../../img/star.png';
import active_star from '../../img/activStar.png';
import stRating from './Rating.module.css';

type Rating = {
    countStar: number
    setCountStar: (countStar: number)=>void
}

export const Rating:React.FC<Rating> = ({countStar, setCountStar}) => {
    return (
        <div>
            <Star selected={countStar > 0} countStar={1} callBack={setCountStar}/>
            <Star selected={countStar > 1} countStar={2} callBack={setCountStar}/>
            <Star selected={countStar > 2} countStar={3} callBack={setCountStar}/>
            <Star selected={countStar > 3} countStar={4} callBack={setCountStar}/>
            <Star selected={countStar > 4} countStar={5} callBack={setCountStar}/>
        </div>
    )
}

type StartPropsType = {
    selected: boolean
    countStar: 1|2|3|4|5
    callBack: (count: 1|2|3|4|5)=>void
}

const Star:React.FC<StartPropsType> = ({selected, countStar, callBack}) => {
    return (
        <span onClick={()=>{callBack(countStar)}} className={stRating.span}>
            {selected ? <img src={active_star} alt="active_star" /> : <img src={star} alt="star"/>}
        </span>
    )
}
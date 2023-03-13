import React, {useState} from "react";
import {Rating} from "./Rating";


export default {
    title: 'Rating stories',
    component: Rating
}

export const Ratings = () => <Rating countStar={0} setCountStar={s => s}/>
export const Ratings1 = () => <Rating countStar={1} setCountStar={s => s}/>
export const Ratings2 = () => <Rating countStar={2} setCountStar={s => s}/>
export const Ratings3 = () => <Rating countStar={3} setCountStar={s => s}/>
export const Ratings4 = () => <Rating countStar={4} setCountStar={s => s}/>
export const Ratings5 = () => <Rating countStar={5} setCountStar={s => s}/>

export const ChangeRating = () =>{
    const [count, setCount] = useState(5);
    return <Rating countStar={count} setCountStar={setCount} />
}


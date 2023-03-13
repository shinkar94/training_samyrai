import React, {useState} from "react";
import {OnOf} from "./OnOf";


export default {
    title: 'OnOf stories',
    component: OnOf
}

export const OnOfStart = () => <OnOf />


// export const ChangeRating = () =>{
//     const [count, setCount] = useState(5);
//     return <Rating countStar={count} setCountStar={setCount} />
// }
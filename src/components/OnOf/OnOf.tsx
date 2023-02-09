// const btn = {
//     display: flex
// }
// const onBtn = {
//     background: green,
//     color: white
// }
// const offBtn = {
//     background: red,
//     color: brown
// }
// const indicatorON ={
//     background: green
// }
// const indicatorOff ={
//     background: red
// }

type OnOfType = {
    included: boolean
}

export const OnOf = (props:OnOfType) =>{
    return(
        <div>
            {/*<div style={onBtn}>On</div>*/}
            {/*<div style={offBtn}>Off</div>*/}
            {/*{props.included && <div style={indicatorON}></div>}*/}
        </div>
    )
}
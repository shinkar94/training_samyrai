import React from "react";

type AccordionPropsType= {
    tittle: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType){
    console.log("Start rendering");
    return (
        <div>
            <AccordionTitle tittle={props.tittle}/>
            {props.collapsed === true && <AccordionBody />}
        </div>
    )
}

type AccordionTitlePropType = {
    tittle: string
}

function AccordionTitle(props: AccordionTitlePropType){
    return <h3>{props.tittle}</h3>
}

function AccordionBody(){
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;
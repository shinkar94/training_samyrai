import React, {useState} from "react";

type AccordionPropsType = {
    tittle: string
    collapsed: boolean
}


function Accordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(props.collapsed)
    const clickCollapsed = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle tittle={props.tittle} callBack={clickCollapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTitleProps = {
    tittle: string
    callBack: ()=>void
}
function AccordionTitle(props: AccordionTitleProps) {
    const openCollapsed = () =>{
        props.callBack()
    }
    return <h3 onClick={openCollapsed}>{props.tittle}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;
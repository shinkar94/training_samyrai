import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOf} from "./components/OnOf/OnOf";

function App() {
    return (
        <div>
            <PageTitle tittle={"My Post"}/>
            Article1
            <Accordion tittle={"Accordion Title"} collapsed={true}/>
            <Accordion tittle={"Accordion Title2"} collapsed={true}/>
            Article2
            <Rating />
            Button
            <OnOf/>
        </div>
    );
}

type PagePropsType = {
    tittle: string
}

function PageTitle(props: PagePropsType) {
    return (
        <h1>{props.tittle}</h1>
    )
}


export default App;

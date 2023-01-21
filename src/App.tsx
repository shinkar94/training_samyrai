import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  console.log("app rendering");
  return (
    <div>
      <PageTitle tittle={"App Tittle"}/>
      <PageTitle tittle={"My title"}/>
        Article1
      <Rating countStar={3}/>
      <Accordion tittle={"Accordion Title"} collapsed={true}/>
      <Accordion tittle={"Accordion Title2"} collapsed={false}/>
        Article2
      <Rating countStar={4}/>
      <Rating countStar={0}/>
      <Rating countStar={1}/>
      <Rating countStar={5}/>
      <Rating countStar={2}/>
    </div>
  );
}

type PagePropsType = {
    tittle: string
}

function PageTitle(props: PagePropsType){
  return(
      <h1>{props.tittle}</h1>
  )
}


export default App;

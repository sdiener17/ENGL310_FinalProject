import React from "react";
import styled from "styled-components";
import TextAndImageCard from "../commonComponents/TextAndImageCard";
import TextAndImageRightCard from "../commonComponents/TextAndImageRightCard";
import TextOnlyCard from "../commonComponents/TextOnlyCard";
import books1 from "../../images/books1.jpg";
import { evaluationpagedata } from "../../data/evaluationpagedata";
import books4 from "../../images/books4.jpg";
import books5 from "../../images/books5.jpg";
import woman3 from "../../images/woman3.jpg";
import woman5 from "../../images/woman5.jpg";

export default function HomePage(){
    return (
        <PageWrapper>
            <div className="marginTop"/>
            <h3>Interpretation Using the Feminist Critical Theory</h3>
            <h1>What were the earliest formst of feminist criticism?</h1>
            <TextAndImageCard image={books4} text={evaluationpagedata.text1}/>
            <TextAndImageCard image={woman5} text={evaluationpagedata.text2}/>
            <h1>How do you interpret a work using the feminist critical theory?</h1>
            <TextAndImageRightCard image={books1} text={evaluationpagedata.text3}/>
            <TextAndImageRightCard image={woman3} text={evaluationpagedata.text4}/>
            <TextAndImageRightCard image={books5} text={evaluationpagedata.text5}/>
            <div className="marginBottom"/>
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:100%;
    //padding-top:40px;
    padding-bottom:60px;
    padding-left:15px;
    //margin-left:40px;
    .marginTop{
        margin-bottom:10px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
    h3{
        font-size:30px;
        margin-bottom:10px;
    }
    h1{
        font-size:20px;
    }
`;
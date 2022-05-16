import React from "react";
import styled from "styled-components";
import TextAndImageCard from "../commonComponents/TextAndImageCard";
import TextAndImageRightCard from "../commonComponents/TextAndImageRightCard";
import books1 from "../../images/books1.jpg";
import { informationpagedata } from "../../data/informationpagedata";
import waves1 from "../../images/waves1.jpg";
import reading1 from "../../images/reading1.jpg";
import woman2 from "../../images/woman2.jpg";

export default function HomePage(){
    return (
        <PageWrapper>
            <div className="marginTop"/>
            <h3>Defining Feminism And The Feminist Critical Theory</h3>
            <h1>What is Feminism?</h1>
            <TextAndImageCard image={books1} text={informationpagedata.text1}/>
            <h1>What are the different waves of feminism?</h1>
            <TextAndImageCard image={waves1} text={informationpagedata.text2}/>
            <h1>Isn't feminism all about women being victims?</h1>
            <TextAndImageRightCard image={reading1} text={informationpagedata.text3}/>
            <h1>Is the “strong female character” good, bad, or somewhere in-between?</h1>
            <TextAndImageRightCard image={woman2} text={informationpagedata.text4}/>
            <div className="marginBottom"/>
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    //justify-content:left;
    align-items:left;
    flex-direction:column;
    width:100%;
    padding-left:15px;
    //padding-top:10px;
    padding-bottom:60px;
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
import React from "react";
import styled from "styled-components";
import TextAndImageCard from "../commonComponents/TextAndImageCard";
import books10 from "../../images/books10.jpg";
import books9 from "../../images/books9.jpg"
import { homepagedata } from "../../data/homepagedata";

export default function HomePage(){
    return (
        <PageWrapper>
            <div className="marginTop"/>
            <TextAndImageCard image={books10} text={homepagedata.text1}/>
            <TextAndImageCard image={books9} text={homepagedata.text2}/>
            <div className="marginBottom"/>
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:100%;
    padding-top:40px;
    padding-bottom:60px;
    //margin-left:40px;
    .marginTop{
        margin-bottom:40px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
`;
import React from "react";
import styled from "styled-components";
import TextAndImageCard from "../commonComponents/TextAndImageCard";
import books1 from "../../images/books1.jpg";
import { informationpagedata } from "../../data/informationpagedata";

export default function HomePage(){
    return (
        <PageWrapper>
            <div className="marginTop"/>
            <TextAndImageCard image={books1} text={informationpagedata.text1}/>
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
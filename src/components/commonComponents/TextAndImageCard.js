import React from "react";
import styled from "styled-components";

export default function InfoCard({image, text}){
    return(
        <PageWrapper>
            <div className="textWrap">
            <div className="imageContainer">
                <img className="cardImage" src={image} ></img>
            </div>
                <div>{text}</div>
            </div>
            
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:left;
    margin-left:15px;
    margin-right:15px;

    margin-bottom:60px;
    .cardImage{
        margin:5px;
        width:200px;
        height:200px;
        border-radius:50%;
        border: 3px solid var(--secondarySiteColor);
        margin-right:15px;
    }
    .imageContainer{
        float:left;
    }
    .textWrap{
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items:center;
        max-width:1200px;
        padding:10px;
        background-color:var(--cardGrey);
        border-radius: 10px;
        font-size: 1.2rem;
    }
    /* .flex-item img{
        flex-grow:0;
        flex-shrink:0;
    } */
`;
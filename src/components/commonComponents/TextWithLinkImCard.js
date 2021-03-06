import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export default function TextWithLinkCard({text, link, image}){
    return(
        <PageWrapper>
            <div className="textWrap">
                <div>{text}</div>
                <a href={link} target="_blank">{link}</a>
                {/* <Link to={link} target="_blank">{link}</Link> */}
                <div className="imageContainer">
                    <img className="cardImage" src={image} ></img>
                </div>
            </div>
            
            
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    /* align-items:center;
    justify-content:center; */
    margin-left:15px;
    margin-right:15px;
    margin-bottom:20px;

    .textWrap{
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items:center;
        max-width:1000px;
        padding:10px;
        background-color:var(--cardGrey);
        border-radius: 10px;
        font-size: 1.2rem;
    }
    .cardImage{
        margin:5px;
        width:100px;
        height:100px;
        border-radius:50%;
        border: 3px solid var(--secondarySiteColor);
    }
    .imageContainer{
        float:left;
    }
`;
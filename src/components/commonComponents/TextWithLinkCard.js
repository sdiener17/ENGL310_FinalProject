import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export default function TextWithLinkCard({text, link}){
    return(
        <PageWrapper>
            <div className="textWrap">
                <div>{text}</div>
                <Link to={link}>{link}</Link>
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
        /* display:flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items:center; */
        max-width:1000px;
        padding:10px;
        background-color:var(--cardGrey);
        border-radius: 10px;
        font-size: 1.2rem;
    }
`;
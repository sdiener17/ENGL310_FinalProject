import React from "react";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown'

export default function InfoCard({text}){
    return(
        <PageWrapper>
            <ReactMarkdown className="textWrap">
                {text}
            </ReactMarkdown>
            
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:left;

    margin-bottom:60px;
    margin-left:15px;
    margin-right:15px;

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
`;
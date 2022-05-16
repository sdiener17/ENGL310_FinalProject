import React from "react";
import styled from "styled-components";

export default function InfoCard({text}){
    return(
        <PageWrapper>
            <div className="textWrap">
                {text}
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

    margin-bottom:60px;

    .textWrap{
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items:center;
        max-width:1200px;
        padding:10px;
        background-color:var(--lightGrey);
        border-radius: 10px;
        font-size: 1.2rem;
    }
`;
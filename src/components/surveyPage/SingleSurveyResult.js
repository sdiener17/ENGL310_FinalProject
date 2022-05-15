import React from 'react';
import styled from "styled-components";


export default function SingleSurveyResult({question, correctAnswer, userAnswer, index}){

    let renderLabel = function(entry) {
        return entry.label + " "+ "("+entry.students+")";
    }
    const COLORS = ['#6848b8', '#c0bd71'];
    
    return (
        <PageWrapper>
            <div className="questionTitle">{question}</div>
            <div className="innerData">
            <div className="userAnswerDiv">Your Answer: {userAnswer} </div>
            <div className="spacerDiv">&nbsp;</div>
            <div className="correctAnswerDiv">Correct Answer: {correctAnswer}</div>
            </div>
        </PageWrapper>

    );
}

const PageWrapper = styled.div`
    display:flex;
    flex-direction: column;
    margin-right:10px;
    align-items: center;
    justify-content: center;
    margin-bottom:40px;
    width:700px;
    flex-wrap: wrap;
    border-bottom:5px solid var(--primarySiteColor);
    .pie{
        //fill: var(--purpleOne);
    }
    .userAnswerDiv{
        margin-left:10px;
        margin-right:10px;
        
    }
    .spacerDiv{
        margin-right:10px;
        border-right:2px solid var(--primarySiteColor);
    }
    .innerData{
        display:flex;
        flex-direction: row;
        align-items: center;
    }
`;




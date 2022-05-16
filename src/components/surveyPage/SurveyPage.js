import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { questions } from "../../data/questions";
import { surveypagedata } from "../../data/surveypagedata";
import SurveyQuestion from "./SurveyQuestion";
import TextOnlyCard from "../commonComponents/TextOnlyCard";


const userAnswerData =
    {
        q1Answer:"yes",
        q2Answer:"no",
        q3Answer:"yes"
    }

export default function SurveyPage({userAnswers, setIsSurveySubmitted, setUserAnswers}){
    let navigate = useNavigate();
    const [radioValueQ1, setRadioValueQ1] = useState(null);
    const [radioValueQ2, setRadioValueQ2] = useState(null);
    const [radioValueQ3, setRadioValueQ3] = useState(null);
    const [radioValueQ4, setRadioValueQ4] = useState(null);
    const [radioValueQ5, setRadioValueQ5] = useState(null);
    const [radioValueQ6, setRadioValueQ6] = useState(null);
    const [radioValueQ7, setRadioValueQ7] = useState(null);
    const [radioValueQ8, setRadioValueQ8] = useState(null);
    const [isError, setIsError] = useState(false);




    const handleSubmitClick = (e)=>{
        //let invalid = validateForm();
        // if(invalid===true){
        //     setIsError(true);
        //     return;
        // }
        constructUserAnswers();
        //setUserAnswers(userAnswerData);
        setIsSurveySubmitted(true);
        navigate("/surveyresults");
    }

    const validateForm = () =>{
        let invalid = false;
        // userAnswers.map((item)=>{
        //     if(item.value === null){
        //         invalid = true;
        //     }
        // })
        if(radioValueQ1.checked ===false){
            invalid = true;
        }
        return invalid;
    }


    const constructUserAnswers = ()=>{
        let tempAn = {
            q1Answer:radioValueQ1,
            q2Answer:radioValueQ2,
            q3Answer:radioValueQ3,
            q4Answer:radioValueQ4,
            q5Answer:radioValueQ5,
            q6Answer:radioValueQ6,
            q7Answer:radioValueQ7,
            q8Answer:radioValueQ8
        }
        setUserAnswers(tempAn);
    }

     return(
        <PageWrapper>
            <h3>The Bechdel Test</h3>
            <h1>What is the Bechdel Test?</h1>
            <TextOnlyCard text={surveypagedata.text1}/>
            <h1>Is the Bechdel test a good test to see if women are portrayed positively?</h1>
            <TextOnlyCard text={surveypagedata.text2}/>
            <TextOnlyCard text={surveypagedata.text3}/>
            <TextOnlyCard text={surveypagedata.text4}/>
            <h3>Bechdel Test Survey</h3>
            <SurveyQuestion questionText={questions[0].questionText} setRadioValue={setRadioValueQ1} nameOfGroup="group1"/>
            <SurveyQuestion questionText={questions[1].questionText} setRadioValue={setRadioValueQ2} nameOfGroup="group2"/>
            <SurveyQuestion questionText={questions[2].questionText} setRadioValue={setRadioValueQ3} nameOfGroup="group3"/>
            <SurveyQuestion questionText={questions[3].questionText} setRadioValue={setRadioValueQ4} nameOfGroup="group4"/>
            <SurveyQuestion questionText={questions[4].questionText} setRadioValue={setRadioValueQ5} nameOfGroup="group5"/>
            <SurveyQuestion questionText={questions[5].questionText} setRadioValue={setRadioValueQ6} nameOfGroup="group6"/>
            <SurveyQuestion questionText={questions[6].questionText} setRadioValue={setRadioValueQ7} nameOfGroup="group7"/>
            {/* <SurveyQuestion questionText={questions[5].questionText} setRadioValue={setRadioValueQ6} nameOfGroup="group6"/> */}
            {isError &&(
                <div className="errorDiv">Please answer all questions.</div>
            )}
            <button className="submitButton" onClick={handleSubmitClick}>Submit</button>
            
            <div className="marginBottom"/>
        </PageWrapper>
    )
}

const PageWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center !important;
    justify-content: center !important;
    .surveyTitle{
        font-size:30px;
        margin-bottom:30px;
    }
    .submitButton{
        background: var(--purpleTwo);
        color: var(--lighterGrey);
        padding: 0.5rem 1.0rem;
        border-radius:5px;
        border: 2px solid var(--darkSiteColor);
        text-decoration:none;
    }
    .submitButton:hover{
        background: var(--purpleOne);

    }
    .textStuff{
        max-width:400px;
        margin-bottom:20px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
    .errorDiv{
        color:red;
    }
    h3{
        font-size:30px;
        margin-bottom:10px;
    }
    h1{
        font-size:20px;
    }
`;
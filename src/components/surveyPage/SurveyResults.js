import React, {useEffect} from "react";
import styled from "styled-components";
import { questions } from "../../data/questions";
import SingleSurveyResult from "./SingleSurveyResult";

export default function SurveyResults({userAnswers}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Sample data
  const dataQuestion1 = [
    { name: "Yes", students: 400 },
    { name: "No", students: 700 },
  ];

  return (
    <PageWrapper>
      <div className="marginTopPie" />
        {/* {questions.map((item)=>
          <SingleSurveyResult question={item.questionText} data={item.questionData} userAnswer={userAnswers.q1Answer} />
        )} */}
        <SingleSurveyResult question={questions[0].questionText} correctAnswer={questions[0].correctAnswer} 
          userAnswer={userAnswers.q1Answer} explanation={questions[0].explanation} />
        <SingleSurveyResult question={questions[1].questionText} correctAnswer={questions[1].correctAnswer} 
          userAnswer={userAnswers.q2Answer} explanation={questions[1].explanation}/>
        <SingleSurveyResult question={questions[2].questionText} correctAnswer={questions[2].correctAnswer} 
          userAnswer={userAnswers.q3Answer} explanation={questions[2].explanation}/>
        <SingleSurveyResult question={questions[3].questionText} correctAnswer={questions[3].correctAnswer} 
          userAnswer={userAnswers.q4Answer} explanation={questions[3].explanation}/>
        <SingleSurveyResult question={questions[4].questionText} correctAnswer={questions[4].correctAnswer} 
          userAnswer={userAnswers.q5Answer} explanation={questions[4].explanation}/>
        <SingleSurveyResult question={questions[5].questionText} correctAnswer={questions[5].correctAnswer} 
          userAnswer={userAnswers.q6Answer} explanation={questions[5].explanation}/>
        <SingleSurveyResult question={questions[6].questionText} correctAnswer={questions[6].correctAnswer} 
          userAnswer={userAnswers.q7Answer} explanation={questions[6].explanation}/>
        {/* <SingleSurveyResult question={questions[5].questionText} data={questions[5].questionData} userAnswer={userAnswers.q6Answer} /> */}
        

      <div className="marginBottom" />
      <div className="marginBottom" />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:40px;
  .marginTopPie {
    margin-bottom: 10px;
  }
  .dataContainer{
      display:flex;
      flex-direction:column;
      justify-content:center;
  }
  .smallDataContainer{
      display:flex;
      flex-direction:row;
      align-items:center;
      margin-right:10px;
  }
  .questionTitle{
      font-size:1.5rem;

  }
`;

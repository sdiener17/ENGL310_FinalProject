import React from "react";
import styled from "styled-components";
import books1 from "../../images/books1.jpg";

export default function HomePage(){
    return(
        <PageWrapper>
            <div className="textWrap">
                <div>
                <img className="imageThing" src={books1} alt="picture of a book"/>
                </div>
                
            This website was created with the purpose of informing people more about the feminist critical theory and how to apply it to literary texts. Visit the “Feminism” page to learn more about this critical theory. The “Evaluation” page provides an example of using this critical theory on the text Harry Potter and the Sorcerer’s Stone. Finally, the “Bechdel Test” page provides information about using the Bechdel test to see if a film respectfully represents females, and provides a quiz to see if you can guess if certain movies pass the test. 
            </div>
        </PageWrapper>
    )
}

const PageWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    padding:20px;
    .textWrap{
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        max-width:1000px;
        padding:10px;
        background-color:var(--mediumGrey);
        border-radius: 10px;
        font-size: 1.2rem;
    }
    .imageThing{
        border-radius:50%;
        width:50%;
        height:90%;
    }

`;
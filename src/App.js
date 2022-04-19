import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/homePage/HomePage";

export default function App() {
  const [isSurveySubmitted, setIsSurveySubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  return (
    <PageWrapper>

        <Header />
          <div >
            {/* <NavBar /> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Routes>
              <Route
                exact
                path="/"
                element={<HomePage/>}
              />
              

            </Routes>
          </div>
        <div className="separaterBottomFooter" />
        <Footer />
    </PageWrapper>
  );
}

const PageWrapper = styled.nav`
  .separaterBottomFooter {
    margin-bottom: 60px;
  }
  //display:flex;
  height: 100%;
  .routeLeft{
    display:flex;
    justify-content: left !important;
  }
  .routeCenter{
    display:flex;
    justify-content: center !important;
  }
  .contentWrapper {
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center; */
  }
`;

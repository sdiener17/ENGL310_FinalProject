import React, {useEffect} from "react";
import styled from "styled-components";
import TextWithLinkCard from "../commonComponents/TextWithLinkCard";
import TextOnlyCard from "../commonComponents/TextOnlyCard";
import TextWithLinkImCard from "../commonComponents/TextWithLinkImCard";
import books1 from "../../images/books1.jpg";
import { sources } from "../../data/sources";
import {imagesources} from "../../data/imagesources";
import { Link } from "react-router-dom";
import books4 from "../../images/books4.jpg";
import books5 from "../../images/books5.jpg";
import books9 from "../../images/books9.jpg";
import books10 from "../../images/books10.jpg";
import woman1 from "../../images/woman1.jpg";
import woman2 from "../../images/woman2.jpg";
import woman3 from "../../images/woman3.jpg";
import woman5 from "../../images/woman5.jpg";
import woman6 from "../../images/woman6.jpg";
import reading1 from "../../images/reading1.jpg";
import mother1 from "../../images/mother1.jpg";
import potter1 from "../../images/potter1.jpg";
import potter2 from "../../images/potter2.jpg";
import potter3 from "../../images/potter3.jpg";
import potter4 from "../../images/potter4.jpg";
import waves1 from "../../images/waves1.jpg";

export default function HomePage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <PageWrapper>
            <div className="marginTop"/>
            <h3>Bibliography</h3>
            <TextOnlyCard text={sources[0].text}/>
            <TextOnlyCard text={sources[1].text}/>
            <TextOnlyCard text={sources[2].text}/>
            <TextOnlyCard text={sources[3].text}/>

            <h3>Image Sources</h3>
            <div className="note">*All images were obtained for free from <a href="https://unsplash.com/" target="_blank">unsplash.com</a></div>
            <TextWithLinkImCard text={imagesources[0].text} link={imagesources[0].link} image={books1}/>
            <TextWithLinkImCard text={imagesources[3].text} link={imagesources[3].link} image={books4}/>
            <TextWithLinkImCard text={imagesources[4].text} link={imagesources[4].link} image={books5}/>
            <TextWithLinkImCard text={imagesources[8].text} link={imagesources[8].link} image={books9}/>
            <TextWithLinkImCard text={imagesources[9].text} link={imagesources[9].link} image={reading1}/>
            <TextWithLinkImCard text={imagesources[10].text} link={imagesources[10].link} image={books10}/>
            <TextWithLinkImCard text={imagesources[11].text} link={imagesources[11].link} image={potter1}/>
            <TextWithLinkImCard text={imagesources[12].text} link={imagesources[12].link} image={waves1}/>
            <TextWithLinkImCard text={imagesources[13].text} link={imagesources[13].link} image={woman1}/>
            <TextWithLinkImCard text={imagesources[14].text} link={imagesources[14].link} image={woman2}/>
            <TextWithLinkImCard text={imagesources[15].text} link={imagesources[15].link} image={woman3}/>
            <TextWithLinkImCard text={imagesources[17].text} link={imagesources[17].link} image={woman5}/>
            <TextWithLinkImCard text={imagesources[18].text} link={imagesources[18].link} image={potter2}/>
            <TextWithLinkImCard text={imagesources[19].text} link={imagesources[19].link} image={potter3}/>
            <TextWithLinkImCard text={imagesources[20].text} link={imagesources[20].link} image={potter4}/>
            <TextWithLinkImCard text={imagesources[21].text} link={imagesources[21].link} image={mother1}/>
            <TextWithLinkImCard text={imagesources[22].text} link={imagesources[22].link} image={woman6}/>
            <div className="marginBottom"/>
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:100%;
    //padding-top:40px;
    padding-bottom:60px;
    //margin-left:40px;
    .marginTop{
        margin-bottom:10px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
    h3{
        font-size:30px;
        margin-bottom:10px;
        margin-left:15px;
    }
    h1{
        font-size:20px;
        margin-left:15px;
    }
    .note{
        font-size:20px;
        margin-left:15px;
        margin-bottom:10px;
    }
`;
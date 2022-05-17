import React, {useEffect} from "react";
import styled from "styled-components";
import TextWithLinkCard from "../commonComponents/TextWithLinkCard";
import TextOnlyCard from "../commonComponents/TextOnlyCard";
import books1 from "../../images/books1.jpg";
import { sources } from "../../data/sources";
import {imagesources} from "../../data/imagesources";
import { Link } from "react-router-dom";

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
            <div className="note">*All images were obtained for free from <Link to={{pathname:"https://unsplash.com/"}} target="_blank">unslplash.com</Link></div>
            <TextWithLinkCard text={imagesources[0].text} link={imagesources[0].link}/>
            <TextWithLinkCard text={imagesources[3].text} link={imagesources[3].link}/>
            <TextWithLinkCard text={imagesources[4].text} link={imagesources[4].link}/>
            <TextWithLinkCard text={imagesources[8].text} link={imagesources[8].link}/>
            <TextWithLinkCard text={imagesources[9].text} link={imagesources[9].link}/>
            <TextWithLinkCard text={imagesources[10].text} link={imagesources[10].link}/>
            <TextWithLinkCard text={imagesources[11].text} link={imagesources[11].link}/>
            <TextWithLinkCard text={imagesources[12].text} link={imagesources[12].link}/>
            <TextWithLinkCard text={imagesources[13].text} link={imagesources[13].link}/>
            <TextWithLinkCard text={imagesources[14].text} link={imagesources[14].link}/>
            <TextWithLinkCard text={imagesources[15].text} link={imagesources[15].link}/>
            <TextWithLinkCard text={imagesources[17].text} link={imagesources[17].link}/>
            <TextWithLinkCard text={imagesources[18].text} link={imagesources[18].link}/>
            <TextWithLinkCard text={imagesources[19].text} link={imagesources[19].link}/>
            <TextWithLinkCard text={imagesources[20].text} link={imagesources[20].link}/>
            <TextWithLinkCard text={imagesources[21].text} link={imagesources[21].link}/>
            <TextWithLinkCard text={imagesources[22].text} link={imagesources[22].link}/>
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
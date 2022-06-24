import React from 'react';
import {HomeSection, HomeInformation, HomeTitle, HomeInfo, Homedesc, Homespan, HomeBtn} from "./style.js"

const Home = () => {
    return (
      <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Hamza Nabil</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <Homedesc>
                        Iam a professional <Homespan>UX Designer</Homespan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </Homedesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    );
  }

export default Home;

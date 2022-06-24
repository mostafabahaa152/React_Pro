import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {PortfolioSection, PortfolioTitle, Span, PortfolioList, PortfolioItem, Box, Img, Overlay, OverlaySpan} from "./style.js"

const Portfolio = () => {

   const [ images, setImages ] = useState([]);

   useEffect ( () => {
    axios.get("/js/data.json").then(res => {setImages(res.data.portfolio ) } )
   } , [])

   const PortfolioImgaes = images.map( (imageItem) => {
    return (
      <Box key={imageItem.id}>
        <Img src={imageItem.image} alt=""/>
        <Overlay>
            <OverlaySpan>
                Show Image
            </OverlaySpan>
        </Overlay>
      </Box>
    )
   })

    return (
      <PortfolioSection>
      <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
      <PortfolioList>
          <PortfolioItem active>All</PortfolioItem>
          <PortfolioItem>HTML</PortfolioItem>
          <PortfolioItem>Photoshop</PortfolioItem>
          <PortfolioItem>Wordpress</PortfolioItem>
          <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>
      
      <div>
          {PortfolioImgaes}
      </div>
      
  </PortfolioSection>
    );
  }

export default Portfolio;

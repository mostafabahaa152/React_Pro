import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {SocialMedia, Social, Icon, SocialP, Span, Info2 } from "./style.js"

const Socail = () => {

  const [socialmedias, setState] = useState([]);

  useEffect( ()=> {
    axios.get("js/data.json").then(res => {setState(res.data.social)})
  },[])

  const allSocial = socialmedias.map((sociala)=> {
    return(
      <Social key={sociala.id} color={sociala.id}>
          <Icon className={sociala.icon}></Icon>
          <SocialP>
              <Span>{sociala.title}</Span>
              <Info2>{sociala.body}</Info2>
          </SocialP>
      </Social>
    )
  })
    return (
      <SocialMedia>
            
            {allSocial}

      </SocialMedia>
  )
}

export default Socail;

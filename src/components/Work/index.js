import React, { Component } from 'react';
import axios from 'axios';
import {WorkSection, WorkTitle, Span, Workpart, Icon, PartTitle, Line, PartDesc} from "./style.js"

class Work extends Component {
 
  state = {
    works : []
  }

  componentDidMount = () => {
    axios.get("/js/data.json").then(res => {this.setState({works: res.data.works})})
  }

  render() {
    
    
      const {works} = this.state;
      
      const worklist = works.map( (workitem)=> {
        return (
          <Workpart first={workitem.id} key={workitem.id}>
              <Icon className={workitem.icon_name}></Icon>
              <PartTitle>{workitem.title}</PartTitle>
              <Line />
              <PartDesc>
                  {workitem.body}
              </PartDesc>
          </Workpart>
        )
      });

      return (
        <WorkSection>
          <div className="container">
              <WorkTitle><Span>My</Span> Work</WorkTitle>
              {worklist}  
          </div>
        </WorkSection>
      );
    }
}

export default Work;

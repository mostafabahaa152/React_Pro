import axios from 'axios';
import React,{useState, useEffect} from 'react';
import {ProfileSkills, ProfileOne, ProfileList, ProfileItem, Span, Web, Skills, SkillsDesc, ProfileTitle, ProfileSpan, Title,  Perc, Parent,  ParentSpan, Bar } from "./style.js"

const Profile = () => {

    const [ Profiles, setProfile ] = useState([]);

    useEffect( ()=> {
        axios.get("/js/data.json").then(res => {setProfile(res.data.skills)})
    }, [])

    const allSkills = Profiles.map((skill) => {
        return (
            <Bar key={skill.id}>
                <Title>{skill.title}</Title>
                <Perc>{skill.perc}</Perc>
                <Parent>
                    <ParentSpan first={skill.id}></ParentSpan>
                </Parent>
            </Bar>
        )
    }) 

    return (
      <ProfileSkills>
            <div className="container">
                <ProfileOne>
                    <ProfileTitle><ProfileSpan>My </ProfileSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <Web>www.google.com</Web>
                        </ProfileItem>
                    </ProfileList>
                </ProfileOne>
                
                <Skills>

                    <ProfileTitle>Some <ProfileSpan>skills</ProfileSpan></ProfileTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    
                    {allSkills}
    
                </Skills>
                
            </div>
        </ProfileSkills>
    );
  }

export default Profile;

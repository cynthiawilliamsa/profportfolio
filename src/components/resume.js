import React, { Component } from 'react'
import {Grid, Cell, List, ListItem} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  state = {
    tutor: ["Provide group and individual tutoring to current ACA students.",
    "Assist students with learning HTML/CSS, JavaScript and React fundamentals."],
    owner: ["Build website using JavaScript and React.", "Working on Fitness Stats tracker app which is a full stack app built using React, Express, MongoDB and Mongoose.",
    "Provide personal training to clients.",
    "Manage marketing, operations, accoutning and other day-to-day tasks of running a business."
    ],
    coordinator: ["Reduced compliance monitoring costs by 30% within a year in the position by bringing contracted services in-house.",
       "Developed 5-year plan to visit over 3000 holding facilities statewide.",
        "Served as liaison for 1000's of juvenile justice stakeholders in regard to maintaining compliance with the Juvenile Justice Delinquency Prevention Act (JJDP).",
     "Effectively authored and implemented processes that provided foundational framework for compliance monitoring." ],
     hr:  ["Decreased recruitement expenses by 30% within a year of being in the positoin by implementing Recruitment Process Outsourcing (RPO).",
     "Managed relocation process for 25-30 executive level hires.",
     "Oversaw vendor contracts for relocation drug testing and multiple job boards.",
     "Managed timeline on multiple time-senseitive projects which improved profitability through automation."
     ]
  }
  tutorTasks() {
    return this.state.tutor.map((item, index) => {
      return <li>{item}</li>;
    });
  }
  ownerTasks() {
    return this.state.owner.map((item, index)=>{
      return <li>{item}</li>
    });
  }
  coordinatorTasks() {
    return this.state.coordinator.map((item, index)=> {
      return <li>{item}</li>
    });
  }
  hrTasks() {
    return this.state.hr.map((item,index) => {
      return <li>{item}</li>
    });
  }
  render() {
    return (
      <div className="resume-body" >
        <Grid style={{width: "90%"}}>
          <Cell className="resume-name-col" col={6} style={{height: '150px'}}>
          <h2>Cynthia Williams</h2>
          <h5 style={{color: 'white'}}>Software Engineer</h5>
          
          </Cell>
          <Cell className="resume-address-col" col={6} style={{height: '150px'}}>                          
              <p style={{marginTop: '25px'}}>(614) 805-2016</p>              
              <p>cynthiawilliamsa@gmail.com</p>
              <p>https://github.comcynthiawilliamsa</p>
              <p>Austin, TX</p> 
              </Cell>
          <Cell className="resume-left-col"col={4}>           
              <h3>Education</h3>
              <hr style={{borderTop: '3px solid white', width: '75%'}}/>
              <Education
                startYear={2018}
                endYear={2018}
                schoolName="Austin Coding Academy"
                schoolDescription="Covered HTML/CSS, responsive web design, Bootstrap, JavaScript, data structures, React, Fetch API and Material UI."
              />
              <Education
                startYear={2006}
                endYear={2008}
                schoolName="Pierce College"
                schoolDescription="Bachelor of Science in Business Administration/Management, Cum Laude 3.8 GPA."
              />              
              <h3>Technical Skills</h3>
              <hr style={{borderTop: "3px solid #F3904F", width: '75%'}}/>
                <Skills
                  skill="JavaScript"
                  progress={75}
                />
                <Skills
                  skill="React"
                  progress={65}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={100}
                />
                 <Skills
                  skill="Git/GitHub"
                  progress={85}
                />
                <Skills
                  skill="JQuery"
                  progress={50}
                />
                <Skills
                  skill="NodeJS"
                  progress={20}
                />
              <hr style={{borderTop: "3px solid #F3904F", width: '75%'}}/>
              <h3>Personal Skills</h3>
                <Skills
                  skill="Problem Solving"
                  progress={100}
                />
                <Skills
                  skill="Collaboration"
                  progress={100}
                />
                <Skills
                  skill="Organization"
                  progress={90}
                />
                <Skills
                  skill="Flexbility"
                  progress={90}
                />
                <Skills
                  skill="Communication"
                  progress={90}
                />
              <hr style={{borderTop: "3px solid #F3904F", width: '75%'}}/>
              
          </Cell>
          <Cell className='resume-right-col' col={8}>            
              
              <h3>Experience</h3>
              <Experience 
                startYear={2018}
                endYear="Present"
                jobName="Austin Coding Academy"
                jobDescription="Tutor"
                />
                <div>{this.tutorTasks()}</div>
              <Experience
                startYear={2016}
                endYear='Present'
                jobName="FitForce, LLC"
                jobDescription="Owner and Certified Personal Trainer."                
                />
                <div>{this.ownerTasks()}</div>                
                <Experience
                startYear={2011}
                endYear={2015}
                jobName="Office of the Governor"
                jobDescription="Program Specialist III"
                />
                <div>{this.coordinatorTasks()}</div>
                <Experience
                startYear={2006}
                endYear={2008}
                jobName="American Signature Furniture/Schottensteins Stores Corp."
                jobDescription="HR Specialist"
                />
                <div>{this.hrTasks()}</div>            
          
          </Cell>
        </Grid>
      </div>
        
    )
  }
}
export default Resume;
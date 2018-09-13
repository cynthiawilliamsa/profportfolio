import React, { Component } from 'react'
import {Grid, Cell, List, ListItem} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  state = {
    jobTasks: 0
  }
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-name-col" col={6} style={{height: '150px'}}>
          <h2>Cynthia Williams</h2>
          <h5 style={{color: 'gray', marginLeft: '2px'}}>Software Engineer</h5>
          
          </Cell>
          <Cell className="resume-address-col" col={6} style={{height: '150px',}}>                          
              <p style={{marginTop: '25px'}}>(614) 805-2016</p>              
              <p>cynthiawilliamsa@gmail.com</p>
              <p>https://github.comcynthiawilliamsa</p>
              <p>Austin, TX</p> 
              </Cell>
          <Cell className="resume-left-col"col={4}>           
              <h3>Education</h3>
              <hr style={{borderTop: '3px solid #F3904F', width: '75%'}}/>
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
                startYear={2016}
                endYear='Present'
                jobName="FitForce, LLC"
                jobDescription="Owner and Certified Personal Trainer."                
                />                
                <Experience
                startYear={2011}
                endYear={2015}
                jobName="Program Specialist III"
                jobDescription="Need input from resume"
                />
                <Experience
                startYear={2006}
                endYear={2008}
                jobName="HR Specialist/Legal Assistant"
                jobDescription="Need input from resume"
                />
              
          
          </Cell>
        </Grid>
      </div>
        
    )
  }
}
export default Resume;
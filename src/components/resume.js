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
        <Grid className="resume-left-col">
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
                alt='avatar'
                style={{height: '200px'}}
                />
              </div>
              <h2 style={{paddingTop: '1em'}}>Cynthia Williams</h2>
              <h5 style={{color: 'gray'}}>Software Engineer</h5>
              <hr style={{borderTop: "3px solid #F3904F", width: '75%'}}/>
              <h5>Location</h5>
              <p>Austin, TX</p>
              <h5>Phone</h5>
              <p>(614) 805-2016</p>
              <h5>Email</h5>
              <p>cynthiawilliamsa@gmail.com</p>
              <h5>My Website</h5>
              <p>mywebsite.com</p>
              <hr style={{borderTop: "3px solid #F3904F", width: '75%'}}/>
              <h5>Technical Skills</h5>
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
              <h5>Personal Skills</h5>
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
            <h3>Education</h3>
              <Education
                startYear={2018}
                endYear={2018}
                schoolName="Austin Coding Academy"
                schoolDescription="30 week full stack Javascript bootcamp."
              />
              <Education
                startYear={2006}
                endYear={2008}
                schoolName="Pierce College"
                schoolDescription="Bachelor of Science in Business Administration/Management, Cum Laude 3.8 GPA."
              />
              <hr style={{borderTop: '3px solid #F3904F', width: '75%'}}/>
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
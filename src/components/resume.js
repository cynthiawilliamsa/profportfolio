import React, { Component } from 'react'
import {Grid, Cell, List, ListItem} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={3}>
            <div style={{textAlign: 'center'}}>
              <img
                src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
                alt='avatar'
                style={{height: '200px'}}
                />
              </div>
              <h2 style={{paddingTop: '2em'}}>Cynthia Williams</h2>
              <h4 style={{color: 'gray'}}>Software Engineer</h4>
              <hr style={{borderTop: "3px solid #833fb2", width: '50%'}}/>
              <h2>Technical Skills</h2>
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
              <hr style={{borderTop: "3px solid #833fb2", width: '50%'}}/>
              <h2>Personal Skills</h2>
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
              <hr style={{borderTop: "3px solid #833fb2", width: '50%'}}/>
              <h5>Address</h5>
              <p>1 Hacker Way Menlo Park, 94025</p>
              <h5>Phone</h5>
              <p>(614) 805-2016</p>
              <h5>Email</h5>
              <p>cynthiawilliamsa@gmail.com</p>
              <h5>My Website</h5>
              <p>mywebsite.com</p>
              <hr style={{borderTop: "3px solid #833fb2", width: '50%'}}/>
          </Cell>
          <Cell className='resume-right-col' col={9}>
            <h2>Education</h2>
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
              <hr style={{borderTop: '3px solid #e22947'}}/>
              <h2>Experience</h2>
              <Experience
                startYear={2016}
                endYear='Present'
                jobName="FitForce, LLC"
                jobDescription="Owner and Certified Personal Trainer."                
                />
                <List>
                    <ListItem>Provided Personal Training to over 20 clients.</ListItem>
                    <ListItem>Managed marketing, operations, accounting and other day-to-day tasks of running a business.</ListItem>
                    <ListItem>Provided Personal Training to over 20 clients.</ListItem>
                    <ListItem>Provided Personal Training to over 20 clients.</ListItem>
                </List>
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
                 <hr style={{borderTop: '3px solid #e22947'}}/>
          
          </Cell>
        </Grid>
      </div>
        
    )
  }
}
export default Resume;
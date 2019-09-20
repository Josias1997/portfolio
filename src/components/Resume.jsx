import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';


class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4} style={{
						color: 'white'
					}}  className="infos" >
						<div style={{
						textAlign: 'center'
					}}>
						</div>
						<h2 style={{
							paddingTop: '2em'
						}} > KOLOGO Josias Yannick </h2>
						<h4 style={{
							color: 'grey'
						}} >Programmer </h4>
						<hr style={{
							borderTop: "3px solid #833fb2",
						}} />
						<p>Full stack developer</p>
						<hr style={{
							borderTop: "3px solid #833fb2",
						}} />
						<h5>Address</h5>
						<p>Avenue Al Maghrib Al Arabi, Rabat-Morocco</p>
						<h5>Phone number</h5>
						<p>(212) 654-896922</p>
						<h5>Email</h5>
						<p>kologojosias@gmail.com</p>
						<hr style={{
							borderTop: "3px solid #833fb2",
						}} />
					</Cell>
					<Cell className="resume-right-col" col={8} >
					 	<h2>Education</h2>
					 	<Education startYear={2014}
					 	endYear={2016}
					 	schoolName="Errachidia's School Of Engineering"
					 	schoolDescription="Mathematics Physics and Computer Science"
					 	 />
					 	 <Education startYear={2016}
					 	endYear={2019}
					 	schoolName="National Institute of Statistics and Applied Economics"
					 	schoolDescription="Software Engineering"
					 	 />
					 	 <hr style={{
							borderTop: "3px solid #e22947"
						}} />

					 	 <h2>Experience</h2>
					 	 <Experience startYear={2017}
					 	endYear={2017}
					 	jobName="Web Developer"
					 	jobDescription="This job was about building web app with PHP/MySQL."
					 	 />
					 	 <Experience startYear={2018}
					 	endYear={2018}
					 	jobName="Mobile Developer"
					 	jobDescription="This enabled me to improve my skills Android development and also to build a mobile app."
					 	 />
					 	 <Experience startYear={"February 2019"}
					 	endYear={"August 2019"}
					 	jobName="Full Stack Developer"
					 	jobDescription="During this journey I've been helping in building website with Drupal 8, ReactJS and Django.
					 	I was able to sharpen my skills in those tools."
					 	 />
					 	 <Experience startYear={"September 2019"}
					 	endYear={"Present Job"}
					 	jobName="Freelance Web Developer"
					 	jobDescription="Nowadays I specialized myself in web and mobile development using React Native, ReactJS and Django."
					 	 />
					 	  <hr style={{
							borderTop: "3px solid #e22947"
						}} />

					 	 <h2>Skills</h2>
					 	 <Skill skill="Javascript"
					 	 progress={95}
					 	 />
					 	 <Skill  skill="HTML/CSS"
					 	 progress={95}
					 	 />
					 	 <Skill  skill="ReactJS"
					 	 progress={90}
					 	 />
					 	 <Skill skill={"React Native"}
								progress={50}
						 />
					 	 <Skill  skill="Python/Django"
					 	 progress={90}
					 	 />
					 	 <Skill  skill="PHP/Symfony"
					 	 progress={90}
					 	 />
					 	 <Skill  skill="MySQL"
					 	 progress={90}
					 	 />
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;


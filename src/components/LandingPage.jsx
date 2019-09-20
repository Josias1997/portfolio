import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
	render() {
		return (
			<div style={{
				width: "100%",
				margin: "auto"
			}}>
				<Grid className="landing-grid">
					<Cell col={12} >
						<img src="/img/img4.jpg"
						 alt="avatar" className="avatar-img"/>
						 <div className="banner-text">
						 	<h1>Full Stack Web Developer</h1>
						 	<hr/>
						 	<p>HTML/CSS | Bootstrap | JavaScript | ReactJS | Python | Django | React Native</p>
						 	<div className="social-links">
						 		<a href="https://github.com/Josias1997" target="_blank" rel="noopener noreferrer">
						 			<i className="fab fa-github" aria-hidden="true">

									</i>
						 		</a>
						 		<a href="https://www.linkedin.com/in/b-josias-yannick-kologo-5a7b77150/" target="_blank" rel="noopener noreferrer">
						 			<i className="fab fa-linkedin" aria-hidden="true">

									</i>
						 		</a>
						 		<a href="https://web.facebook.com/profile.php?id=100007434435780" target="_blank" rel="noopener noreferrer">
						 			<i className="fab fa-facebook" aria-hidden="true">

									</i>
						 		</a>
						 		<a href="https://www.hackerrank.com/kologojosias" target="_blank" rel="noopener noreferrer">
						 			<i className="fab fa-hackerrank" aria-hidden="true">

									</i>
						 		</a>
						 	</div>
						 </div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default LandingPage;

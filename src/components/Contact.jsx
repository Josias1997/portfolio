import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
	render() {
		const styles = {
			fontSize: '25px',
			fontFamily: 'Anton'
		};
		return (
			<div className="contact-body" >
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>KOLOGO Josias Yannick</h2>
						<img src="/img/img4.jpg"
						alt="avatar" style={{
							height: '20%',
						}} />
						<p style={{
							width: '75%',
							margin: 'auto',
							paddingTop: '1em'
						}} > You want to transform your business by setting up a website or an mobile app just reach to me. I'll be pleased to help you.
						 </p>
						</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr/>
						<div className="contact-list" >
							<List>
							  <ListItem>
							    <ListItemContent style={{
							    	...styles
							    }} > <i className="fa fa-phone" aria-hidden="true">

								</i>
							    (212) 654-896922
							    </ListItemContent>
							  </ListItem>
							  <ListItem>
							    <ListItemContent style={{...styles}} ><i className="fa fa-envelope" aria-hidden="true">

								</i>
							    kologojosias@gmail.com</ListItemContent>
							  </ListItem>
							  <ListItem>
							    <ListItemContent style={{...styles}} ><i className="fab fa-facebook-messenger" aria-hidden="true">

								</i>
							    Josias-Yann Kologo</ListItemContent>
							  </ListItem>
							</List>
						</div>

					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;

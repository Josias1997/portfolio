import React, {Component} from 'react';
import { Tabs, Tab, Grid,
	Cell, Card, CardTitle, CardActions, Button,
	CardMenu, IconButton , CardText
} from 'react-mdl';


class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};
	}

	toggleCategories = () => {
		if (this.state.activeTab === 0) {
			return (
				<Card shadow={5} style={{
					minWidth: '450',
					margin: 'auto'

				}} >
					<CardTitle style={{
						color: '#fff',
						height: '176px',
						background: 'url("https://reactjs.org/logo-og.png") center / cover'
					}} >
						React Project #1
					</CardTitle>
					<CardText>
						This is a burger ordering app built with ReactJS.
					</CardText>
					<CardActions>
						<Button colored ><a href={"https://github.com/Josias1997/burger-app"} style={{
							textDecoration: 'none'
						}}>GitHub</a></Button>
						<Button colored >
							<a href={"https://react-burger-app-ea050.firebaseapp.com/"}
							   style={{
							   	textDecoration: 'none'
							   }}
							>
								Live Demo
							</a>
						</Button>
					</CardActions>
					<CardMenu style={{
						color: '#fff'
					}} >
						<IconButton name="share" />
					</CardMenu>
				</Card>

			)
		}
		else if(this.state.activeTab === 1) {
			return(
				<Card shadow={5} style={{
					minWidth: '450',
					margin: 'auto'

				}} >
					<CardTitle style={{
						color: '#fff',
						height: '176px',
						background: 'url("https://static.djangoproject.com/img/logos/django-logo-negative.png") center / cover'
					}} >
						Django Project #1
					</CardTitle>
					<CardText>
						Here is a pictures blog website built using Django 2 and ReactJS.
					</CardText>
					<CardActions>
						<Button colored ><a href={"https://github.com/Josias1997/lights"} style={{
							textDecoration: 'none'
						}}>GitHub</a></Button>
						<Button colored ><a href={"https://lightsphotography.net"} style={{
							textDecoration: 'none'
						}}>Live Demo</a></Button>
					</CardActions>
					<CardMenu style={{
						color: '#fff'
					}} >
						<IconButton name="share" />
					</CardMenu>
				</Card>
			)
		}
	};

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({
					activeTab: tabId
				})} >
					<Tab style={{
						color: 'indigo',
						fontWeight: 'bold'
					}}>ReactJS</Tab>
					<Tab  style={{
						color: 'indigo',
						fontWeight: 'bold'
					}}>Django</Tab>
				</Tabs>
				<section className="projects-grid">
					<Grid className="projects-grid">
						<Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
				</section>
			</div>
		)
	}
}

export default Projects;

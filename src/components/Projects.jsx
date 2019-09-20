import React, {Component} from 'react';
import {
    Tabs, Tab, Grid,
    Cell, Card, CardTitle, CardActions, Button,
    CardMenu, IconButton, CardText
} from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            githubBaseUrl: 'https://github.com/Josias1997/',
            reactLogo: 'https://reactjs.org/logo-og.png',
            djangoLogo: 'https://static.djangoproject.com/img/logos/django-logo-negative.png',
            reactNativeLogo: 'https://www.supinfo.com/articles/resources/204633/7729/0.jpg',
            projects: [
                {
                    tool: 'react',
                    description: 'This is a burger ordering app built with ReactJS.',
                    liveDemoLink: 'https://react-burger-app-ea050.firebaseapp.com/',
                    repository: 'burger-app',
                    tab: 0,
                },
				{
					tool: 'react',
					description: 'Here is a pictures blog website built using Django 2 and ReactJS.',
					liveDemoLink: 'https://lightsphotography.net/',
					repository: 'lights',
                    tab: 0,
				},
                {
                    tool: 'django',
                    description: 'Here is a pictures blog website built using Django 2 and ReactJS.',
                    liveDemoLink: 'https://lightsphotography.net/',
                    repository: 'lights',
                    tab: 1,
                },
                {
                    tool: 'django',
                    description: 'Here is an Ecommerce website built using Django 2.',
                    liveDemoLink: null,
                    repository: 'Ecommerce',
                    tab: 1,
                },
                {
                    tool: 'react-native',
                    description: 'React Native weather app',
                    liveDemoLink: null,
                    repository: 'weather-app',
                    tab: 2,
                }
            ]
        };
    }

    toggleCategories = () => {
    	const titleStyles = {
			color: '#fff',
			height: '176px',
			paddingTop: '20px',
		};
    	const cardStyle = {
			minWidth: '450',
			margin: 'auto'
		};
    	const anchorStyle = {
    		textDecoration: 'none'
		};
    	return (
            this.state.projects.filter(project => (
                project.tab === this.state.activeTab
            )).map((project) => {
                let logoUrl = this.state.reactLogo;
                if (project.tab === 1) {
                    logoUrl = this.state.djangoLogo;
                }
                else if (project.tab === 2)  {
                    logoUrl = this.state.reactNativeLogo;
                }
                return (
                    <Cell col={4}>
                        <Card shadow={5} style={{
                            ...cardStyle
                        }}>
                            <CardTitle style={{
                                ...titleStyles,
                                background: 'url("' +  logoUrl +'") center / cover'
                            }}/>
                            <CardText>
                                {project.description}
                            </CardText>
                            <CardActions>
                                <Button colored><a href={this.state.githubBaseUrl + project.repository} style={{
                                    ...anchorStyle
                                }}>GitHub</a></Button>
                                {
                                    project.liveDemoLink !== null ?
                                        <Button colored>
                                            <a href={project.liveDemoLink}
                                               style={{
                                                   ...anchorStyle
                                               }}
                                            >
                                                Live Demo
                                            </a>
                                        </Button> : null
                                }
                            </CardActions>
                            <CardMenu style={{
                                color: '#fff'
                            }}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>
                )

            })
        );
    };

    render() {
        const tabStyles = {
            fontWeight: 'bold',
        };
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({
                    activeTab: tabId
                })} style={{
                    background: 'white',
                }}>
                    <Tab style={{
                        ...tabStyles
                    }}>ReactJS</Tab>
                    <Tab style={{
                        ...tabStyles
                    }}>Django</Tab>
                    <Tab style={{
                        ...tabStyles
                    }}>React Native</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid>
                        {this.toggleCategories()}
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;

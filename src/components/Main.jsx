import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';



const Main = props => {
	return (
		<Switch>
			<Route exact path={"/"} component={LandingPage} />
			<Route path={"/resume"} component={Resume} />
			<Route path={"/projects"} component={Projects} />
			<Route path={"/contact"} component={Contact} />
		</Switch>
	)
};

export default Main;
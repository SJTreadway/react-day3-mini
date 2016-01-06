import React from 'react';

const About = React.createClass({
	render() {
		return (
			<div>
				<h1>About {this.props.params.name}</h1>
			</div>
		);
	}
});

export default About;
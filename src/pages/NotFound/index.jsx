import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Navigation } from 'storybook-project/dist';

export default class NotFound extends React.Component {
  render() {
	return (
	  <div>
		<Header title="Not Found!"/>
		<Navigation
			links =
			{
				[
					{
						link: "/",
						title: "Home"
					}
				]
			}
		/>
	  </div>
	);
  }
}

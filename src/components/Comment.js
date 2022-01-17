import React from 'react';

class Comment extends React.Component {
	render() {
		const { message, name, date } = this.props.details;

		return (
			<li>
				<span>{message}</span>
				<div>{`${name} on ${date}`}</div>
			</li>
		);
	}
}

export default Comment;

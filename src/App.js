import React from 'react';
import CreateForm from './components/CommentForm';
import Comment from './components/Comment';
import './App.css';

class App extends React.Component {
	state = {
		comments: {},
	};
	addComment = comment => {
		const comments = { ...this.state.comments };
		comments[`comments${Date.now()}`] = comment;
		this.setState({
			comments,
		});
	};
	render() {
		return (
			<div className='homePage'>
				<div>
					<CreateForm addComment={this.addComment} />
				</div>
				<ul>
					{Object.keys(this.state.comments).map(key => (
						<Comment key={key} details={this.state.comments[key]} />
					))}
				</ul>
			</div>
		);
	}
}

export default App;

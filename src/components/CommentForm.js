import React from 'react';

class CreateForm extends React.Component {
	nameRef = React.createRef();
	messageRef = React.createRef();

	createComment = event => {
		event.preventDefault();
		const comment = {
			name: this.nameRef.current.value,
			message: this.messageRef.current.value,
			date: Date.now(),
		};
		this.props.addComment(comment);
		event.currentTarget.reset();
	};

	render() {
		return (
			<div className='commentForm'>
				<form onSubmit={this.createComment}>
					<input
						name='name'
						type='text'
						placeholder='Name'
						ref={this.nameRef}
					/>
					<textarea name='message' ref={this.messageRef} />
					<button type='submit'>Comment</button>
				</form>
			</div>
		);
	}
}

export default CreateForm;

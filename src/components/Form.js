import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'React'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username}: ${this.state.comments}: ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const { username, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username}
                        onChange={this.handleUsernameChange} />
                    <div>
                        <label>Comments</label>
                        <textarea value={comments}
                            onChange={this.handleCommentsChange}>
                        </textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic}
                            onChange={this.handleTopicChange}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div>
                </div>
                <button type="submit">Submit!!!!</button>
            </form>
        )
    }
}

export default Form;

/**
 * To convert this into a controlled comp, there are 2 steps
 * 1st step: to create a comp state that will control the value of the input element.
 * 2nd step: handling the onChange Event
 * 
 * For the Submit button: common approach is to have a js function that handles the submission of the form . 
 * That method will have access to the data that the user entered in to the form.
 * 
 * After submitting, the page refreshes and filled in data is lost. 
 * to Avoid this, add an event.preventdefault. this prevents default bheavior of form submission.
 * 
 * src="https://youtu.be/7Vo_VCcWupQ"
 * 
 * for code cleanup, destructure the state props i nthe render method Line 39 (getting rid of 'this.state...')
 */

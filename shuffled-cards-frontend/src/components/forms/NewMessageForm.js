import React from 'react'
import { API_ROOT, HEADERS } from '../../constants/API.constants'

class NewMessageForm extends React.Component {
    constructor(){
        super()
        this.state = {
            text: ''
        }
    };

    componentWillReceiveProps = nextProps => {
        this.setState({ chat_id: nextProps.chat_id });
    };

    handleChange = e => {
        this.setState({ text: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        fetch(`${API_ROOT}/messages`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                text: this.state.text,
                chat_id: this.props.chat_id,
                token: localStorage.getItem('token')
            })
        });
        this.setState({ text: '' });
    };

    render = () => {
    return (
        <div className="newMessageForm">
            <form onSubmit={this.handleSubmit}>
                <label>New Message:</label>
                <input
                type="text"
                value={this.state.text}
                onChange={this.handleChange}
                />
                <input type="submit" />
            </form>
        </div>
    );
    }
}

export default NewMessageForm
import React from 'react';
import Message from '../message/message';
import './messageboard.css';

export default class MessageBoard extends React.Component {

	constructor(props) {
		super(props);
		this._scrollToBottom = this._scrollToBottom.bind(this);
	}

	componentDidMount() {
		this._scrollToBottom();
	}

	componentDidUpdate() {
		this._scrollToBottom();
	}

	render() {
		const messagesRows = this.props.messages.map(msg => {
			return (<Message key={msg.key} body={msg.Body} from={msg.From} myPhoneNumber={this.props.myPhoneNumber} />);
		});

		return (
			<div className="messageboardcont" ref={(d) => { this.messageBoard = d }}>
				{messagesRows}
			</div>
		);
	}

	_scrollToBottom() {
        this.messageBoard.scrollTop = this.messageBoard.scrollHeight;
	}
}
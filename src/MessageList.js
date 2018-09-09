import React from "react";

export class MessageList extends React.Component {
  render() {
    return (
      <ul>{this.props.messages.map(message => <li>{message.text}</li>)}</ul>
    );
  }
}

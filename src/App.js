import React, { Component, Fragment } from "react";
import { Greeter } from "./Greeter";
import { LoginForm } from "./LoginForm";
import { UserList } from "./UserList";
import { MessageList } from "./MessageList";
import { MessageForm } from "./MessageForm";
import "./styles.css";

class App extends Component {
  state = {};
  componentWillMount() {
    this.props.client.stateChanges.subscribe(x => this.setState({ data: x }));
  }
  render() {
    return (
      <div className="app">
        {/*test comment*/}
        {/*JSON.stringify(this.state.data)*/}
        <Greeter name="Siva" />
        {!this.state.data.chat.isAuthenticated && (
          <LoginForm onLogin={name => this.props.client.tryLogin(name)} />
        )}
        {this.state.data.chat.isAuthenticated && (
          <div className="chat-content">
            <UserList users={this.state.data.chat.users} />
            <MessageList messages={this.state.data.chat.messages} />
            <MessageForm
              onSendText={text => this.props.client.sendText(text)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;

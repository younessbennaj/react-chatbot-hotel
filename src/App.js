import React, { Component } from 'react';
import MessageList from './components/messageList';
import SendMessageForm from './components/sendMessageForm';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css'
const messageList = [
    {
        name: 'John',
        text: 'Hello'
    },
    {
        name: 'Joey',
        text: 'Hi !'
    }
]
class App extends Component {
    state = { messages: messageList }
    render() {
        return (
            <main className="container">
                <h1 className="text-center">Hospitality Chatbot</h1>
                <MessageList messages={this.state.messages} />
                <SendMessageForm />
            </main>);
    }
}

export default App;
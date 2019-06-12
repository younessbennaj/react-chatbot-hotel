import React, { Component } from 'react';
import MessageList from './components/messageList';
import SendMessageForm from './components/sendMessageForm';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css'
const messageList = [
    {
        name: 'John',
        text: 'Hello',
        id: Math.random()
    },
    {
        name: 'Joey',
        text: 'Hi !',
        id: Math.random()
    }
]
class App extends Component {
    state = { messages: messageList }

    message = React.createRef();

    sendMessage = (event, text) => {
        const messages = this.state.messages;
        messages.push({ name: 'Teddy', text, id: Math.random() });
        this.setState({ messages });
        event.preventDefault();
    }

    render() {
        return (
            <main className="container">
                <h1 className="text-center">Hospitality Chatbot</h1>
                <MessageList messages={this.state.messages} />
                <SendMessageForm onSubmit={this.sendMessage} />
            </main>);
    }
}

export default App;
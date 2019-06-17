import React, { Component } from 'react';
import MessageList from './components/messageList';
import SendMessageForm from './components/sendMessageForm';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import axios from 'axios';
const messageList = [
    {
        name: 'User',
        text: 'Hello',
        id: Math.random()
    },
    {
        name: 'Bot',
        text: 'Hi ! How I can help you ?',
        id: Math.random()
    }
]
class App extends Component {
    state = { messages: messageList }

    message = React.createRef();


    receiveMessage = async (event, text) => {
        event.preventDefault();
        const data = { text };
        this.sendMessage(text, 'User');
        const response = await axios.post('https://d5b785a5.ngrok.io/api/df_text_query', data);
        const botMessage = response.data.fulfillmentMessages[0].text.text[0];
        this.sendMessage(botMessage, 'Bot');
    }

    sendMessage(text, name) {
        const message = {
            name: name,
            text,
            id: Math.random()
        };
        const messages = this.state.messages;
        messages.push(message);
        this.setState({ messages });
    }

    render() {
        return (
            <main className="container">
                <h1 className="text-center">Hospitality Chatbot</h1>
                <MessageList messages={this.state.messages} />
                <SendMessageForm onSubmit={this.receiveMessage} />
            </main>);
    }
}

export default App;
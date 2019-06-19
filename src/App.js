import React, { Component } from 'react';
import MessageList from './components/messageList';
import SendMessageForm from './components/sendMessageForm';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import axios from 'axios';
const messageList = [];
class App extends Component {
    state = {
        messages: messageList,
        message: {
            name: 'User',
            text: '',
            id: Math.random()
        }
    }

    message = React.createRef();


    async df_text_query_result(text) {
        const data = { text };
        const response = await axios.post('https://d5b785a5.ngrok.io/api/df_text_query', data);
        const botMessage = {
            name: 'Bot',
            text: response.data.fulfillmentMessages[0].text.text[0],
            id: Math.random()
        };
        this.renderMessages(botMessage);
    }

    df_event_query_result = async (event) => {
        const data = { event };
        const response = await axios.post('https://d5b785a5.ngrok.io/api/df_event_query', data);
        const botMessage = {
            name: 'Bot',
            text: response.data.fulfillmentMessages[0].text.text[0],
            id: Math.random()
        };
        this.renderMessages(botMessage);
    }

    submitMessages = message => {
        const userMessage = { ...message };
        this.renderMessages(userMessage);
        this.df_text_query_result(message.text);
    }

    renderMessages(message) {
        const messages = this.state.messages;
        messages.push(message);
        this.setState({ messages });
        console.log(this.state.messages);
    }

    componentDidMount() {
        this.df_event_query_result('Welcome');
    }


    render() {
        return (
            <main className="container">
                <h1 className="text-center">Hospitality Chatbot</h1>
                <MessageList messages={this.state.messages} />
                <SendMessageForm message={this.state.message} onSubmit={this.submitMessages} />
            </main>
        );
    }
}

export default App;
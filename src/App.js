import React, { Component } from 'react';
import MessageList from './components/messageList';
import SendMessageForm from './components/sendMessageForm';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import axios from 'axios';
import uuid from "uuid";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class App extends Component {
    //Since componentWillMount is being deprecated is far better to make tasks that
    //they need to be done before the component is mounted in constructor function itself
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            messages: [],
            message: {
                name: 'User',
                text: '',
                id: uuid.v4()
            }
        };
        //We bind the submitMessages method to the component instead of the sendMessageForm props object
        //Now 'this' refer to the component class
        this.submitMessages = this.submitMessages.bind(this);

        //We need to set a cookie in the user browser with a unique id to remember the conversation
        //If the user refresh the page or comeback in the site he session still be the same and
        //he/she will be able to continue the conversation.

        if (!cookies.get('userId')) {
            cookies.set('userId', uuid.v4());
        }
    }


    async df_text_query_result(text) {
        const data = { text, userId: cookies.get('userId') };
        const response = await axios.post('https://d5b785a5.ngrok.io/api/df_text_query', data);
        const botMessage = {
            name: 'Bot',
            text: response.data.fulfillmentMessages[0].text.text[0],
            id: uuid.v4()
        };
        this.renderMessages(botMessage);
    }

    df_event_query_result = async (event) => {
        const data = { event };
        const response = await axios.post('https://d5b785a5.ngrok.io/api/df_event_query', data);
        const botMessage = {
            name: 'Bot',
            text: response.data.fulfillmentMessages[0].text.text[0],
            id: uuid.v4()
        };
        this.renderMessages(botMessage);
    }

    submitMessages(message) {
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
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import axios from 'axios';
import uuid from "uuid";
import Cookies from 'universal-cookie';
import {
    ChatBotContainer,
    Content,
    Header,
    HeaderTitle,
    Footer,
    MessageList,
    SendMessageForm
} from './components';

const cookies = new Cookies();

class App extends Component {
    //Since componentWillMount is being deprecated is far better to do tasks that
    //they need to be done before the component is mounted in constructor function itself
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            messages: [],
            userMessage: {
                name: 'User',
                type: 'text',
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
        const response = await axios.post('https://dae75b5c.ngrok.io/api/df_text_query', data);

        response.data.fulfillmentMessages.map((response) => {
            this.filterByMessageType(response);
        });
    }

    df_event_query_result = async (event) => {
        const data = { event };
        const response = await axios.post('https://dae75b5c.ngrok.io/api/df_event_query', data);
        response.data.fulfillmentMessages.map((response) => {
            this.filterByMessageType(response);
        });
    }

    filterByMessageType(response) {

        let botMessage;
        if (response.message === 'text') {
            botMessage = {
                name: 'Bot',
                type: 'text',
                text: response.text.text[0],
                id: uuid.v4()
            };
        } else {
            const { values } = response.payload.fields.content.listValue;

            const content = [];

            values.map((value) => {
                const { title, type, subtitle, button, imageUrl } = value.structValue.fields;
                const cardContent = {
                    title: title.stringValue,
                    type: type.stringValue,
                    text: subtitle.stringValue,
                    imageUrl: imageUrl.stringValue,
                    button: button.stringValue
                }

                content.push(cardContent);
            })

            botMessage = {
                name: 'Bot',
                type: 'carousel',
                content,
                id: uuid.v4()
            }
        }

        this.renderMessages(botMessage);

    }

    submitMessages(userMessage) {
        const message = { ...userMessage };
        this.renderMessages(message);
        this.df_text_query_result(userMessage.text);
    }

    renderMessages(message) {
        const messages = this.state.messages;
        messages.push(message);
        this.setState({ messages });
    }

    componentDidMount() {
        this.df_event_query_result('Welcome');
    }


    render() {
        const width = '350px';
        const height = '520px';
        const contentHeight = "426px"
        return (
            <main className="container">
                <ChatBotContainer
                    width={width}
                    height={height}
                >
                    <Header className="d-flex align-items-center px-3">
                        <HeaderTitle className="">Hospitality Chatbot</HeaderTitle>
                    </Header>
                    <Content height={contentHeight} className="mt-1 pt-2">
                        <MessageList messages={this.state.messages} />
                    </Content>
                    <Footer className="shadow rounded-bottom">
                        <SendMessageForm userMessage={this.state.userMessage} onSubmit={this.submitMessages} />
                    </Footer>
                </ChatBotContainer>
            </main>
        );
    }
}

export default App;
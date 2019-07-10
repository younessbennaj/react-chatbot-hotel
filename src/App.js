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
    messagesEnd;

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
        this.submitQuickReplies = this.submitQuickReplies.bind(this);

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
        console.log(response.data);
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

    payloadReducer(payload) {

        return payload.listValue.values.map((item) => {
            let result = {};
            for (let key in item.structValue.fields) {
                if (item.structValue.fields[key].stringValue) {
                    result[key] = item.structValue.fields[key].stringValue;
                } else {
                    result[key] = this.payloadReducer(item.structValue.fields[key]);
                }
            }
            return result;
        });

    }

    filterByMessageType(response) {
        let botMessage;
        if (response.message === 'text') {
            botMessage = {
                name: 'Bot',
                type: response.message,
                text: response.text.text[0],
                id: uuid.v4()
            };
            this.renderMessages(botMessage);
        } else if (response.message === 'quickReplies') {
            const { quickReplies } = response.quickReplies;
            // const { values } = response.payload.fields.content.structValue.fields.buttons.listValue;
            const content = [];

            quickReplies.map((reply) => {
                const quickRepliesContent = {
                    title: reply,
                    value: reply
                }

                content.push(quickRepliesContent);
            });

            botMessage = {
                name: 'Bot',
                type: response.message,
                content,
                id: uuid.v4()
            }

            this.renderMessages(botMessage);

        } else {

            const { fields } = response.payload;

            if (fields.carousel) {

                const { carousel } = response.payload.fields;

                const content = this.payloadReducer(carousel);

                botMessage = {
                    name: 'Bot',
                    type: 'carousel',
                    content,
                    id: uuid.v4()
                }

            }

            this.renderMessages(botMessage);
        }

    }

    submitMessages(userMessage) {
        const message = { ...userMessage };
        this.renderMessages(message);
        this.df_text_query_result(userMessage.text);
    }

    submitQuickReplies(value, messageId) {
        const messages = [...this.state.messages];
        const deleteMessage = messages.find((message) => {
            return message.id === messageId;
        })
        messages.splice(messages.indexOf(deleteMessage), 1);

        this.setState(
            { messages },
            () => {
                const message = { ...this.state.userMessage };
                message.text = value;
                message.id = uuid.v4();
                this.submitMessages(message);
            }
        );
    }

    renderMessages(message) {
        const messages = this.state.messages;
        messages.push(message);
        this.setState({ messages });
    }

    componentDidMount() {
        this.df_event_query_result('Welcome');
    }

    componentDidUpdate() {
        this.messagesEnd.scrollIntoView({ behaviour: "smooth" });
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
                        <MessageList
                            onQuickRepliesSubmit={this.submitQuickReplies}
                            messages={this.state.messages}
                        />
                        <div ref={(element) => { this.messagesEnd = element; }}>
                        </div>
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
import React, { useEffect, useState } from 'react';

import { Form } from './components/Form';
import { AUTHORS } from './utils/constants';




const initialMessages = [
    { author: AUTHORS.HUMAN, text: 'hello' },
    { author: AUTHORS.BOT, text: 'bye' }
];

const App = () => {

    const [messages, setMessages] = useState(initialMessages);

    const handleAddMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };


    return (
        <div>
            <h1>React is working</h1>
            {messages.map((message) => (
                <div>{message.author}:{message.text}</div>
            ))}

            <Form onAddMessage={handleAddMessage} />
        </div>
    );
}


/* class App extends React.Component {
    constructor(props) {
        this.state = {
            value: 2,
            count: 0,
        }
    }

    addPlusToString = () => {
        return `${this.props.str}+${this.state.value}-${this.state.count}`;
    }
    updateValue = () => {
        this.setState(prevState => ({ value: prevState.value + 1 }));
    }

    render() {

        return (
            <>

                <h1>HELLO: {this.addPlusToString()}</h1>
                <button onClick={this.updateValue}>Update</button>
            </>
        );
    }
} */

export default App;

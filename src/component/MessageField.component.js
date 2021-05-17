import React, { useState, useEffect } from "react";
import css from "./layout.css";
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import ChatList from "./ChatList.component";
import TextField from '@material-ui/core/TextField';
import Messages from "./Messages.component";
import NormalGuyImg from "../assets/img/normalGuy.jpg"
import YohAsakuraImg from "../assets/img/io-asakura.jpg"
import AbnormalGuyImg from "../assets/img/unnormal-guy.jpg"
import MarinaNotGuyImg from "../assets/img/marina.jpg"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";


const MessageField = () => {
    const [latestMessage, setLatestMessage] = useState({});
    const [messageValue, setMessageValue] = useState("");
    const [contacts, setContacts] = useState([{
        chatId: "brendon1",
        name: "Brendon Urie",
        picture: AbnormalGuyImg,
        messages: []
      },
      {
        chatId: "yoh1",
        name: "Yoh Asakura",
        picture: YohAsakuraImg,
        messages: []
      },
      {
        chatId: "marina1",
        name: "Marina Diamandis",
        picture: MarinaNotGuyImg,
        messages: []
      }
    ]);

    const submitMessage = (event, chatId, newAuthor) => {
      event.preventDefault()
      const message = {
        value: messageValue,
        author: newAuthor
      }

      addMessage(chatId, newAuthor,message)
    }

    const botMessage = ()=>{
      const message = {
        value: "Beep Boop",
        author: "Bot"
      }
    setTimeout(()=>{
      addMessage(latestMessage.chatId,"Bot", message)
    },1000)
    }

    const addMessage = (chatId, newAuthor, message) => {

    console.log(chatId)

    let newContact = contacts.find(contact => contact.chatId == chatId).messages.push(message)
    let contact = contacts.filter(contact => contact.chatId !== chatId)
    contact.push(newContact)


      setMessageValue(" ")
      setLatestMessage({
        author: newAuthor,
        chatId: chatId
      })
    }

    const changeMessage = (changedMessage) => {
      const newMessageValue = changedMessage.target.value
      setMessageValue(newMessageValue)
    }

    const isEmptyObject = (emptyObject) => {
      if (Object.keys(emptyObject).length === 0) {
        return true
      } else {
        return false
      }
    }

    useEffect(() => {
      if (!isEmptyObject(latestMessage) && latestMessage.author !== "Bot") {
       botMessage()
      }
    }, [latestMessage]);

  return (
    <div>
      <Paper elevation={1} className={css.chatBox}>

      <Router>

      <ChatList contacts={contacts} />
  
        <div className={css.messageField}>

        <Switch>
          {contacts.map((contact,index)=> 
 
          <Route key={index} path={"/chat/" + contact.chatId}>
          <Messages messages={contact.messages}></Messages>
          <form className={css.messageBar} onSubmit={(e)=>submitMessage(e,contact.chatId,"You")}>
            <TextField
              className={css.inputMessage}
              label="Message"
              onChange={changeMessage}
              fullWidth={true}
              value={messageValue}
            />
            <IconButton type="submit" aria-label="send">
              <SendIcon />
            </IconButton>
          </form>
        </Route>

          )}  
        </Switch>
  
      
        </div>

        </Router>

      </Paper>
    </div>
  )
}

export default MessageField;
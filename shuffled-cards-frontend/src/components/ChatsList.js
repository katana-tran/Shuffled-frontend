import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants/API.constants';
import NewChatForm from './forms/NewChatForm';
import MessagesArea from './MessagesArea';
import Cable from './Cables';

class ChatsList extends React.Component {
  state = {
    chats: [],
    activeChat: null
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/chats`)
      .then(res => res.json())
      .then(chats => this.setState({ chats }));
  };

  handleClick = id => {
    this.setState({ activeChat: id });
  };

  handleReceivedChat = response => {
    const { chat } = response;
    this.setState({
      chats: [...this.state.chats, chat]
    });
  };

  handleReceivedMessage = response => {
    const { message } = response;
    const chats = [...this.state.chats];
    const chat = chats.find(
      chat => chat.id === message.chat_id
    );
    chat.messages = [...chat.messages, message];
    this.setState({ chats });
  };

  render = () => {
    const { chats, activeChat } = this.state;
    return (
      <div className="ChatsList">
        <ActionCable
          channel={{ channel: 'ChatsChannel' }}
          onReceived={this.handleReceivedChat}
        />
        {this.state.chats.length ? (
          <Cable
            chats={chats}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <h2>Chats</h2>
        <ul>{mapChats(chats, this.handleClick)}</ul>
        <NewChatForm />
        {activeChat ? (
          <MessagesArea
            chat={findActiveChat(
              chats,
              activeChat
            )}
          />
        ) : null}
      </div>
    );
  };
}

export default ChatsList;

// helpers

const findActiveChat = (chats, activeChat) => {
  return chats.find(
    chat => chat.id === activeChat
  );
};

const mapChats = (chats, handleClick) => {
  return chats.map(chat => {
    return (
      <ul key={chat.id} onClick={() => handleClick(chat.id)}>
         Chat name: {chat.title}
      </ul>
    );
  });
};
import React from 'react'
import NewMessageForm from './forms/NewMessageForm'

const MessagesArea =({chat: { id, title, messages }}) => {
  return (
    <div className="messagesArea">
      <h2>Room: {title}</h2>
      <ul>{orderedMessages(messages)}</ul>
      <NewMessageForm chat_id={id} />
    </div>
  );
}

export default MessagesArea

const orderedMessages = messages => {
    const sortedMessages = messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    return sortedMessages.map(message => {
      return <ul key={message.id}>{message.user.display_name} says "{message.text}"</ul>;
    });
  };
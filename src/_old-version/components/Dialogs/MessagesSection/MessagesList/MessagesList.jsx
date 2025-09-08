import Message from './Message/Message';

import styles from './MessagesList.module.css';

const MessagesList = ({ messages }) => {
  return (
    <ul className={styles.list}>
      {messages.map(({ id, message }) => (
        <Message key={id} message={message} />
      ))}
    </ul>
  );
};

export default MessagesList;

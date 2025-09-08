import { useDispatch, useSelector } from 'react-redux';
import {
  selectMessages,
  sendNewMessage,
} from '@/_old-version/reducers/dialogsReducer';
import useInputValue from '@/_old-version/useInputValue';
import MessagesList from './MessagesList/MessagesList';
import NewMessage from './NewMessage/NewMessage';

import styles from './MessagesSection.module.css';

const MessagesSection = () => {
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);
  const { messageText, handleChangeText, resetText } = useInputValue('');

  const handleSendMessage = () => {
    dispatch(sendNewMessage(messageText));
    resetText();
  };

  return (
    <div className={styles.messages_wrapper}>
      <p>Mb info about user</p>
      <MessagesList messages={messages} />
      <NewMessage
        value={messageText}
        onChange={handleChangeText}
        onCLick={handleSendMessage}
        placeholder="Message ..."
      />
    </div>
  );
};

export default MessagesSection;

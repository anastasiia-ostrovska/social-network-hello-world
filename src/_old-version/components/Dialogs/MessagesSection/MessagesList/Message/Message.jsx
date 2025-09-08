import styles from './Message.module.css';

const Message = ({ message }) => {
  return <li className={styles.message}>{message}</li>;
};

export default Message;

import styles from './NewMessage.module.css';

const NewMessage = ({ value, onChange, onCLick, placeholder = '' }) => {
  return (
    <div className={styles.message_wrapper}>
      <textarea
        name="newMessage"
        id="newMessage"
        rows="2"
        value={value}
        onChange={(event) => onChange(event)}
        placeholder={placeholder}
      />
      <button type="submit" onClick={() => onCLick()}>
        Send
      </button>
    </div>
  );
};

export default NewMessage;

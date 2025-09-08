import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = ({ name, id }) => {
  return (
    <li className={styles.dialog}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </li>
  );
};

export default DialogItem;

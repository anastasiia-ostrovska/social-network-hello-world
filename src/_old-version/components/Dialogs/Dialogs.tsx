import DialogsSection from './DialogsSection/DialogsSection';
import MessagesSection from './MessagesSection/MessagesSection';

import styles from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={styles.dialogs_wrapper}>
      <DialogsSection />
      <MessagesSection />
    </div>
  );
};

export default Dialogs;

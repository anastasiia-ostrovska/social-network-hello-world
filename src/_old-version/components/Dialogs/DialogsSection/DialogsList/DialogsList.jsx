import DialogItem from './DialogItem/DialogItem';

const DialogsList = ({ dialogs }) => {
  return (
    <ul>
      {dialogs.map(({ id, name }) => (
        <DialogItem key={id} id={id} name={name} />
      ))}
    </ul>
  );
};

export default DialogsList;

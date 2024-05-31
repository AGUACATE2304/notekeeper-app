import '../../assets/css/style.css'
import Card from 'antd/es/card/Card';

export const Note = ({ note, setCurrentNote, handlerDeleteNote }) => {
  return (
    <Card className="note">
      <h2>{note.name}</h2>
      <p>Descripción: {note.description}</p>
      <p>Importante: {note.important ? "Sí" : "No"}</p>
      <p>Estado: {note.status}</p>
      <p>Fecha de vencimiento: {note.dueDate}</p>
      <div className="note-buttons">
        <button className="update-btn" onClick={() => setCurrentNote(note)}>Actualizar</button>
        <button className="delete-btn" onClick={() => handlerDeleteNote(note.id)}>Eliminar</button>
      </div>
    </Card>
  );
};

import './commente.scss';
import { useState } from 'react';

export const Commente = ({ star, title: initialTitle, name: initialName }) => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [name, setName] = useState(initialName);

  
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  
  const saveChanges = () => {
    setIsEditing(false);
  };

  
  const cancelChanges = () => {
    setTitle(initialTitle);
    setName(initialName);
    setIsEditing(false);
  };

  return (
    <div className="commente">
      <img src={star} alt="" />

      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
          />
          <button onClick={saveChanges}>Сохранить</button>
          <button onClick={cancelChanges}>Отменить</button>
        </div>
      ) : (
        <div>
          <h2>{title}</h2>
          <b>{name}</b>
          <button onClick={() => setIsEditing(true)}>Изменить</button>
        </div>
      )}
    </div>
  );
};

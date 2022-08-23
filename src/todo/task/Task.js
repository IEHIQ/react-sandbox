import { useState } from 'react';
import './task.sass';

function Task(props) {

    const [title, setTitle] = useState(props.title || 'Название');
    const [description, setDescription] = useState(props.description || 'Описание');
    const [icon, setIcon] = useState(props.icon || '🎯');

    return (
        <div className="task">
            <div className="task__icon">{icon}</div>
            <div className="text">
                <div className="text__title">{title}</div>
                <div className="text__desc">{description}</div>
            </div>
        </div>
    );
}

export default Task;
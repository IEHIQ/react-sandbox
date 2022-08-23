import { useState } from 'react';
import './view.sass';

function View(props) {

    const [tasks, setTasks] = useState(props.tasks || []);

    return (
        <div className="view">
            {tasks}
        </div>
    );
}

export default View;
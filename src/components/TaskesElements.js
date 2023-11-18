import TaskElement from "./TaskElement"
import './TaskesElements.css';
const TaskesElemets = props => {

    const tasks = props.tasks.map(task => <TaskElement value={task} click={props.click}/>);

    return <ul className="tasks">
        {tasks}
    </ul>


}

export default TaskesElemets;
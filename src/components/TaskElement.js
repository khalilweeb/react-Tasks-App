import './TaskElement.css'
const TaskElement = (props) => {


return <li className='taskElement' onClick={props.click}>{props.value} </li>

}

export default TaskElement;
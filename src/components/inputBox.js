import './InputBox.css'

const InputBox = props => {

return <div className="container">
    <h1>Enter your task</h1>
    <input type="text" placeholder="enter you task" className='input' onChange={props.changeHandler}/>
    <button className='button' onClick={props.click}>Add Task</button>
</div>


}


export default InputBox;
import { useState } from 'react';
import './App.css';
import TaskesElemets from './components/TaskesElements';
import InputBox from './components/inputBox';

function App() {
  const [tasks , setTasks] = useState(['khalil',]);
  const [task, setTask] = useState('');

  const inputChangeHandler = e => {
    setTask([e.target.value]);
    console.log('change');
  }

  const clickHandler = () => {
    setTasks([...tasks, task]);
    console.log('click');
  } 

  const deleteHandler = (ele) => {
    setTasks(
      tasks.filter(e => e !== ele.target.value)

    )

    console.log("delete click");
  }



  return (
    <div className="App">
      <InputBox    click={clickHandler} changeHandler={e => inputChangeHandler(e)}/>
      <TaskesElemets tasks={tasks}
      click={deleteHandler}
   />
    </div>
  );
}

export default App;

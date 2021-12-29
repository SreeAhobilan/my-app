//REACT TASK-02
//MY TO-DO LIST
//Initially importing all the required elements into the App.js file
import './App.css';
import 'animate.css';
import {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
//Creating a App function using Params
function App() {
  const Tasks = [
  {check:false,task:'Create Theme'},
  {check:false,task:'Work on WordPress'},
  {check:false,task:'Organize office main department'},
  {check:false,task:'Error solve in HTML template'}
];
  const [taskData,addTask] = useState(Tasks);
  const [updatedTask,added]=useState({check:false});
  const [data,setData] = useState(true);
  const [data1,setData1] = useState(false);
  const [data2,setData2] = useState(false);

function Data({check , task , type,info,id}){
  const [strike,striking] = useState(check);
  const style = {data:(strike)?"none":"block"};
  const style1 = {data:(strike)?"block":"none"};
  const removing=(id)=>{
  const details=taskData.filter((task,index)=>index!==id)
  info(details)
  }
return(
  <div className="tasks">
    {(type==="filter") ? (check===false) ? <div style={style}>
      <input type="checkbox" onClick={()=>{striking(!strike); 
        for(let i of taskData){
          if(i.task===task){
            i.check = true;
              }};}}/>
                <span>{task}</span>
  </div>
    : (check===true) ? 
    <div style={style1}>
      <input type="checkbox" defaultChecked onClick={()=>{striking(!strike); 
        for(let i of taskData){
          if(i.task===task){
            i.check = false;
              }};}}/>
                <span><strike>{task}</strike></span>
    </div>:""
    :  (check) ?
    <div>
      <input type="checkbox" defaultChecked onClick={()=>{striking(!strike); 
        for(let i of taskData){
          if(i.task===task){
            i.check = !strike;
              }};}}/>
                {(strike)?<span><strike>{task}</strike></span>:<span>{task}</span>}
                <IconButton aria-label="delete" size="small">
                  <DeleteIcon color='black' onClick={()=>removing(id)} fontSize="inherit" />
                </IconButton>
    </div>
    :  
    <div>
      <input type="checkbox" onClick={()=>{striking(!strike); 
        for(let i of taskData){
          if(i.task===task){
            i.check = !strike;
              }};}}/>
                {(strike)?<span><strike>{task}</strike></span> :<span>{task}</span>}
                <IconButton aria-label="delete" size="small">
                  <DeleteIcon color='black' onClick={()=>removing(id)} fontSize="inherit" />
                </IconButton>
                </div>} 
  </div>);}
//Returning the App function to give condition in order to display the required fields
  return (
    <div className="App">
      <div className='overall'>
      <h1  className="animate__animated animate__heartBeat animate__repeat-3">My TO-DO List</h1>
      <div className="addTask-container">
      <div className="addTask">
        <div className='head'>
      <TextField className='add' onChange={(event)=>added({...updatedTask, task:(event.target.value)})} id="outlined-basic" label="Enter the Task" variant="outlined" />
      <Button  variant="contained" aria-label="outlined primary button group" className="button" onClick={()=>{(updatedTask.task!==undefined)?addTask([...taskData,updatedTask]):alert("Enter your task")}}>Add</Button>
      </div>
      </div>
      </div>
      <div className="tasks-status-container">
        <div className="taskStatus">
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={()=>{setData(true);setData1(false);setData2(false)}}>All</Button>
            <Button onClick={()=>{setData(false);setData1(true);setData2(false)}}>Active</Button>
            <Button onClick={()=>{setData(false);setData1(false);setData2(true)}}>Completed</Button>
        </ButtonGroup>
        </div>
        { (data) ? (taskData.map(({check,task},index)=><Data key={index} info={addTask} id={index} check={check} task={task} type="All" />)) : ""}
        { (data1) ? (taskData.filter((task)=>{return(task.check===false)}).map(({task,check},index)=><Data key={index} check={check} task={task} type="filter" />)) :""}
        { (data2) ? (taskData.filter((task)=>{return(task.check===true)}).map(({task,check},index)=><Data key={index} check={check} task={task} type="filter"/>)) :""}
      </div>
      </div>
    </div>
  );
}
//Finally after the logic part we use animation and CSS to make it look good
export default App;

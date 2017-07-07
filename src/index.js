import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todoitem from './component/todoitem.js';
import TodoForm from './component/TodoForm.js';

class TodoList extends React.Component {
  constructor() {
    super();
    this.changeStage = this.changeStage.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.state = {
      tasks:[{
        name:'Amit Kumar',
        completed:false
      },
      {
        name:'Ram Kumar',
        completed:false
      },
      {
        name:'Shyam Kumar',
        completed:false
      },
      {
        name:'Narash Kumar',
        completed:false
      }],
      currentTask:''
    }
  }

addTask(event){
 event.preventDefault();
let tasks = this.state.tasks;
let currentTask  = this.state.currentTask;
tasks.push({
  name:currentTask,
  completed:false
})
this.setState({
  tasks,
  currentTask:''
})
}

updateTask(newvalue){
  this.setState({
    currentTask:newvalue.target.value
  })
}
 changeStage(index){
   //console.log(this.state.tasks[index]);
   var tasks = this.state.tasks;
   var task = tasks[index];
   task.completed = !task.completed;

   this.setState({
   	tasks:tasks
   })
 }

render(){
  return(
    <section>
    <TodoForm
      currentTask={this.state.currentTask}
      updateTask={this.updateTask}
      addTask={this.addTask}
      />
    <ul>
    {
      this.state.tasks.map((tasks, index) => {
        return <Todoitem
        key={tasks.name}
        detail = {tasks}
        clickHandeler = {this.changeStage}
        index = {index}
        />;
     })
   }
    </ul>
    </section>
  )
 }
}

ReactDOM.render(<TodoList/>, document.getElementById('root'));

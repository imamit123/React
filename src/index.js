import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
 import './index.css';
import Todoitem from './component/todoitem.js';

class TodoList extends React.Component {
  constructor() {
    super();
    this.changeStage = this.changeStage.bind(this);
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
      }]
    }
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
  )
 }
}

ReactDOM.render(<TodoList/>, document.getElementById('root'));

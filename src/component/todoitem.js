
import React from 'react';

// class Tooditem extends React.Component {
//  render(){
//    return(
//      <li onClick={() => {
//        this.props.clickHandeler(this.props.index);
//      }}
//      className={
//        this.props.detail.completed ? 'completed' : ''
//      } >
//      {this.props.detail.name}</li>
//    )
//  }
// }

const Todoitem = (props) => {
  return(
    <li onClick={ () => {
         props.clickHandeler(props.index);
       }}
       className={
         props.detail.completed ? 'completed' : ''
       } >
       {props.detail.name}
       <button
         onClick={ (event) => {
           event.stopPropagation();
         props.deleteTask(props.index);
          }}>
       Delete</button>
       </li>

     )
}

export default Todoitem;

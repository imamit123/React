
import React from 'react';

class Todoitem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing:false
    }
    this.renderForm = this.renderForm.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.ToggalState = this.ToggalState.bind(this);
  }


renderForm(){
 return(
   <form>
   <input type="text"
     defaultValue={this.props.detail.name}
   />
   <button type="submit">Update</button>
   </form>
 )
}

ToggalState (){
  const { isEditing } = this.state;
  this.setState({
    isEditing:!isEditing
  })


}


renderItem(){
 return(
   <li onClick={ () => {
      this.props.clickHandeler(this.props.index);
    }}
    className={
      this.props.detail.completed ? 'completed' : ''
    } >
    {this.props.detail.name}
    <button
      onClick={ (event) => {
        event.stopPropagation();
      this.props.deleteTask(this.props.index);
       }}>
    Delete</button>
    <button
      onClick={ (event) => {
        event.stopPropagation();
      this.ToggalState();
       }}>
    Edit Item</button>
    </li>
 )

}

render(){
//  const isEditing = this.state.isEditing;
  const { isEditing } = this.state;

  return(
    <section>
    {
      isEditing ? this.renderForm() : this.renderItem()
    }
  </section>

     )
     }
}

export default Todoitem;

import React from 'react';
import Task from './Task.js';
import { Component } from 'react';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputData: "",
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }
  handleChange(event) {
    this.setState({ inputData: event.target.value });
  }

  addItem(event) {
    const taskObj ={
      text: this.state.inputData,
      checked: false,
      ID: Date.now(),
    }
    this.setState(
      {
        items: this.state.items.concat(taskObj),
        inputData: '',
      })
    //inputChange(e){
    //setState (this.tasks)
    //}
    event.preventDefault();
  }
  //input
  // setFilter
  render() {
    // const mapHelper = (item, idex) <Task key={index} task={item} onD
    //const filterHelper =  item => {
    // 
    //}
    return (
      <div className="List">
        <form onSubmit={this.addItem}>
          <input onChange={this.handleChange} type="text" value={this.state.inputData}
            placeholder='add new task'>
          </input>
          <button type="submit"><h1>+</h1></button>
        </form>
        {/* {this.state.taskList.filter(filterHelper).map(mapHelper)} */}
        <Task tasks={this.state.items} />
      </div>
    );
  }
}
export default ToDoList;
 //pseudocode
    //Index.js
        //App.js //model //didmount for locale storage
              //html //renders what ever is in props
                  //header
                  //input field
                  //container
                  //item counter
                  //filter buttons
                      //all
                      //active
                      //completed

          //header.js // shows what state your on, and takes input from new todo, on each sheet
          //toDoLis.js



// buttons
  // clickhandelers

//finish dynamic rendering vid
  // *add todo
        //render <divs>
  //*remove todo
  //*clear all
    //reimport default state for toDoLis.js
    // 


  //*checkbox on <li>
      //checked or unchecked
        //checked = completed
        //unchecked = active



// might add these buttons just on app.js instead of toDoLis.js
      //all
      //completed
      //active

      // will filter by id of to do Arr

//}



  // import 

// let toDoArr = [];
        //{id: ,title: ,status: (all, active, completed) }
              //active = 0
              //completed = 1
              //all = 2


///array of lists



  //default is empty
  //updates to local storage

  //lifecycle
  //render each change to locale storage
      //after any click handler
      //stays saved untill "clear all is pressed"


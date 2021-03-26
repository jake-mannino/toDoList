import React from 'react';
import { Component } from 'react';
class Task extends Component {
    constructor (props){
        super(props)
    }
    addTasks(item, index) {
        return <li key={index}> {item.text}</li>
    }
    render() {
        let enteredTasks = this.props.tasks;
        let listItems  = enteredTasks.map(this.addTasks);
        return (
            <ul className="List">
                {listItems}
            </ul>
        );
    };

}


export default Task
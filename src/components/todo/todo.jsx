import React, { Component } from 'react';

class Todo extends Component {
    state = {
        todoText:"",
        todos:[],
    };

    render(){
        return(
         <div>
            <h5>Simple todo app</h5>

            <div>
                <input type="text"  value={this.state.todoText} onChange={this.handleTextChange} placeholder="Todo text"></input>
                <button onClick={this.buttonClic}>Add</button>
            </div>

            <div>
                <ul>
                    {this.state.todos.map((text) => <li key={text}>{text}</li> )}
                </ul>
            </div>
         </div>
        );
    }

    buttonClic=() => {       
        var ls =this.state.todos;
        ls.push(this.state.todoText);
        this.setState({todos: ls});
        this.setState({todoText: ""});
    }

    handleTextChange = (event) => {
        this.setState({ todoText: event.target.value });
    }
}

export default Todo;

/**
 * steps:
 * 1 - click on button
 * 2- console log the text from the state
 * 3- push that text into state
 * 4- clear the imput (clear the state.todoText)
 * 5- map the state.todos to li
 */
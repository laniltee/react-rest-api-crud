import React, {Component} from 'react';
import axios from 'axios';

class AddToDo extends Component {

    constructor(props) {

        super(props);

        this.state = {
            newTodo: {
                "userId": 1,
                "title": "",
                "completed": false
            },
            adding: false,
            added: false,
            error: false
        };

        this.addToDo = this.addToDo.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    componentDidMount() {

    }

    onTextChange(e) {
        const textBoxId = e.target.id;
        const value = e.target.value;

        const newToDo = this.state.newTodo;
        newToDo[textBoxId] = value;

        this.setState({newToDo});
    }

    addToDo() {
        this.setState({adding: true});
        const CREATE_TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

        axios.post(CREATE_TODO_URL, this.state.newToDo)
            .then(response => {
                this.setState({
                    adding: false,
                    newTodo: {
                        "userId": 1,
                        "title": "",
                        "completed": false
                    },
                    added: true,
                    error: false
                })
            })
            .catch(error => {
                this.setState({
                    adding: false,
                    added: false,
                    error: true
                })
            })
    }

    render() {
        return (
            <div>
                <h3>Enter Item</h3>
                <input type="text" id="title" value={this.state.newTodo.title} onChange={this.onTextChange}/>
                <button onClick={() => this.addToDo()}>Add To Do</button>
                {this.state.adding ? 'Please Wait Adding Todo .. ..' : null}
                {this.state.added ? 'Successfully Added New ToDo.. ..' : null}
                {this.state.error ? 'Adding ToDo Failed. Try Again.. ..' : null}
            </div>
        )
    }
}

export default AddToDo;

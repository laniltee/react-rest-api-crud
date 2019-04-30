import React, {Component} from 'react';
import axios from 'axios';
import SingleToDo from "./SingleToDo";

class AllToDos extends Component {

    constructor(props) {

        super(props);

        this.state = {
            todos: [],
            loading: false,
            error: false
        };

        this.loadToDos = this.loadToDos.bind(this);
    }

    loadToDos(){
        this.setState({loading: true});
        const GET_TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
        axios.get(GET_TODOS_URL)
            .then(response => {
                this.setState({
                    todos: response.data,
                    loading: false
                })
            })
            .catch(error =>{
                this.setState({
                    loading: false,
                    error: true
                })
            })
    }

    componentDidMount() {
        this.loadToDos();
    }

    render() {
        const todos = this.state.todos.map(inputToDo => {
            return <SingleToDo todo={inputToDo}/>
        });
        return (
            <div>
                {this.state.loading ? <p>'Loading .. .. ..'</p> : null}
                {this.state.error ? <p>'Error .. .. ..'</p> : null}
                <h3>ToDo List</h3>
                {todos}
            </div>

        )
    }
}

export default AllToDos;

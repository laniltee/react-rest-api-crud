import React, {Component} from 'react';
import axios from 'axios';
import SingleToDo from "./SingleToDo";
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import _ from 'lodash';

class SemanticSearch extends Component {

    constructor(props) {

        super(props);

        this.state = {
            todos: [],
            loading: false,
            error: false
        };

        this.loadToDos = this.loadToDos.bind(this);
    }

    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

    handleResultSelect = (e, { result }) => this.setState({ value: result.title });

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value });

        setTimeout(() => {
            // TODO
            // Handle search API call here
            // Set the results state after mapping as required from network call results
            // Thats all
            // Next 3 lines of codes are not needed
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = result => re.test(result.title);

            this.setState({
                isLoading: false,
                results: _.filter(this.state.todos, isMatch),
            })
        }, 300)
    };

    loadToDos(){
        this.setState({loading: true});
        const GET_TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
        axios.get(GET_TODOS_URL)
            .then(response => {
                this.setState({
                    todos: response.data.map(todo => ({
                        title: todo.title,
                        description: todo.completed ? 'Completed' : 'Not Completed',
                        image: "",
                        price: ""
                    })),
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
        return (
            <div>
                <p>Enter Search Value</p>
                <Search
                    loading={this.state.isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                    results={this.state.results}
                    value={this.state.value}
                />
            </div>

        )
    }
}

export default SemanticSearch;

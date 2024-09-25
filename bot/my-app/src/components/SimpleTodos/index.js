import { Component } from 'react'
import TodoItem from '../TodoItem'

import './index.css'

class SimpleTodos extends Component {
    state = { todoListItems: this.props.initialTodosList, searchInput: '' }

    deleteTodo = id => {
        const { todoListItems } = this.state
        const filteredTodo = todoListItems.filter(each => each.id !== id)
        this.setState({ todoListItems: filteredTodo })
    }

    onClickSearch = e => {
        this.setState({ searchInput: e.target.value })
    }

    render() {
        const { todoListItems, searchInput } = this.state

        // Filter todos based on the search input
        const searchResults = todoListItems.filter(eachTodo =>
            eachTodo.title.toLowerCase().includes(searchInput.toLowerCase())
        )

        return (
            <div className="simple-todo-con">
                <div className="todo-item-con">
                    <h1 className="heading">Simple Todos</h1>
                    <input
                        type="search"
                        value={searchInput}
                        onChange={this.onClickSearch}
                        placeholder="Search Todos"
                    />
                    <ul className="todo-list">
                        {searchResults.length > 0 ? (
                            searchResults.map(eachItem => (
                                <TodoItem
                                    todoList={eachItem}
                                    key={eachItem.id}
                                    deleteTodo={this.deleteTodo}
                                />
                            ))
                        ) : (
                            <p>No matching todos found</p>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SimpleTodos

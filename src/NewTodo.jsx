import React, { Component } from 'react'

export default class NewTodo extends Component {
    constructor(props) {
        super(props)

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)

        this.state = { title: '', description: '', assignTo: '' }
    }

    handleTitleChange(e) {
        this.setState({title: e.target.value})
    }

    handleDescriptionChange(e) {
        this.setState({description: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>New TODO-item</h1>
                Title: <input type="text" value={this.state.title} onChange={this.handleTitleChange} /><br />
                Description: <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} /><br />
                Type: <input type="text" value={this.state.type} onChange={this.handleDescriptionChange} /><br />
                Assign to: Foo
            </div>
        )
    }
}

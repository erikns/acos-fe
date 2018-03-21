import React, { Component } from 'react'
import { getTasks } from './data'

class ItemList extends Component {
    constructor(props) {
        super(props)
        this.state = { tasks: [] }
    }

    componentWillMount() {
        getTasks().then(ts => this.setState({ tasks: ts }))
    }

    render() {
        const renderTasks = () => this.state.tasks.map(t => <li>{t.title} ({t.userEmail})</li>)

        return (
            <div>
                <h1>TODO items</h1>
                <ul>
                    {renderTasks()}
                </ul>
            </div>
        )
    }
}

export default ItemList

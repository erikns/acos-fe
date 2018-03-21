import React, { Component } from 'react'
import { getTasks } from './data'

class ItemList extends Component {
    constructor(props) {
        super(props)
        this.state = { error: false, tasks: [] }
    }

    componentWillMount() {
        getTasks().then(response => {
            console.log(response)
            this.setState({ error: false, tasks: response.data })
        }).catch(() => {
            this.setState({ error: true })
        })
    }

    render() {
        const renderTasks = () => this.state.tasks.map(t => <li>{t.title} ({t.userEmail})</li>)

        const showError = () => {
            if (this.state.error)
                return <span>Error loading TODO-items</span>
        }

        return (
            <div>
                <h1>TODO items</h1>
                {showError()}
                <ul>
                    {renderTasks()}
                </ul>
            </div>
        )
    }
}

export default ItemList

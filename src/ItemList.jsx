import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getTasks, getUsers } from './data'

class ItemList extends Component {
    constructor(props) {
        super(props)
        this.state = { error: false, tasks: [], users: [] }

        this.update = this.update.bind(this)
    }

    componentWillMount() {
        this.update()
    }

    update() {
        getTasks().then(response => {
            console.log(response)
            this.setState({ error: false, tasks: response.data })
        }).catch(() => {
            this.setState({ error: true })
        })

        getUsers().then(response => {
            this.setState({ users: response.data })
        })
    }

    render() {
        const renderTasks = () => this.state.tasks.map(t => <li>{t.title} ({t.userEmail})</li>)
        const renderUsers = () => this.state.users.map(u => <li>{u.fullName}</li>)

        const showError = () => {
            if (this.state.error)
                return <span>Error</span>
        }

        return (
            <div>
                <h1>TODO items</h1>
                {showError()}
                <ul>
                    {renderTasks()}
                </ul>
                <Link to="/newtodo">New TODO-item</Link>

                <h1>Users</h1>
                <ul>
                    {renderUsers()}
                </ul>
            </div>
        )
    }
}

export default ItemList

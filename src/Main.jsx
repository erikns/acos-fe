import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getUsers, getTasksForUser } from './data'

const Item = (props) => {
    const classes = "non-select " + (props.selected ? "selected" : "")
    return (
        <tr className={classes} onClick={() => props.onSelect(props.idx)} style={{ cursor: 'pointer' }}>
            <td>{props.selected ? "*" : ""}</td>
            <td>{props.user.fullName}</td>
            <td>{props.user.email}</td>
        </tr>
    )
}

const TaskList = (props) => {
    const renderTasks = () =>
        props.tasks.map(t =>
            <tr><td>{t.title}</td><td>{t.description}</td><td>{t.typeName}</td></tr>
        )

    return (
        <table class="list">
            <thead>
                <td>Title</td>
                <td>Description</td>
                <td>Type</td>
            </thead>
            <tbody>
                {renderTasks()}
            </tbody>
        </table>
    )
}

class UserList extends Component {
    render() {
        const renderUsers = () =>
            this.props.users.map((u, i) =>
                <Item key={i} idx={i} user={u} onSelect={this.props.onUserSelect}
                    selected={this.props.selectedIdx == i} />
            )

        return (
            <div>
                <table class="list">
                    <thead>
                        <td></td>
                        <td>Navn</td>
                        <td>Epost</td>
                    </thead>
                    <tbody>
                        {renderUsers()}
                    </tbody>
                </table>
            </div>
        )
    }
}

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = { error: false, tasks: [], users: [], selectedIdx: -1 }

        this.update = this.update.bind(this)
        this.onUserSelect = this.onUserSelect.bind(this)
    }

    componentWillMount() {
        this.update()
    }

    update() {
        getUsers().then(response => {
            this.setState({ users: response.data })
        })
    }

    onUserSelect(idx) {
        this.setState({ selectedIdx: idx })
        getTasksForUser(this.state.users[idx].id).then(r => {
            this.setState({ tasks: r.data })
        })
    }

    render() {
        return (
            <div>
                <h3>Brukere</h3>
                <UserList users={this.state.users} onUserSelect={this.onUserSelect} />
                <br />
                <br />
                <TaskList tasks={this.state.tasks} />
            </div>
        )
    }
}

export default Main

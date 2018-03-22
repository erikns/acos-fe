import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getTasks, getUsers } from './data'

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

class UserList extends Component {
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
    }

    render() {
        const renderUsers = () =>
            this.state.users.map((u, i) =>
                <Item key={i} idx={i} user={u} onSelect={this.onUserSelect}
                    selected={this.state.selectedIdx == i} />
            )

        return (
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
        )
    }
}

const Main = (props) => {
    return (
        <div>
            <h3>Brukere</h3>
            <UserList />
        </div>
    )
}

export default Main

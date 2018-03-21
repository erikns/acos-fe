import axios from 'axios'

const mockTasks = [
    {
        id: 1,
        title: 'Foobar',
        description: 'Foobar desc',
        userEmail: 'test@test',
    },
    {
        id: 2,
        title: 'Baz',
        description: 'Baz desc',
        userEmail: 'test@test',
    }
]

export const getTasks = () => {
    return axios.get('http://localhost:5000/api/tasks')
}

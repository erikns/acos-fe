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
    return new Promise((resolve, reject) => {
        resolve(mockTasks)
    })
}

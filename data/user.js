import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Kulnois User',
        email: 'kulnois@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Cesar Villegas',
        email: 'cesar@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Maria Rojas',
        email: 'maria@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;
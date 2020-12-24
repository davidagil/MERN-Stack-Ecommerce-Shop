import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Bobby Bobinson',
        email: 'bBobinson@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Robby Robinson',
        email: 'rRobinson@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;
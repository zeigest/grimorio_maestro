require('dotenv').config();

const connectDB = require('../src/config/db'); 
const User = require('../src/models/User');

(async () => {
    try {
        await connectDB();
        const user = await User.create({
            username: 'zeigest',
            email: 'positivoparadoja@gmail.com',
            password: 'Jamaica25*',
            roles: ['PLAYER'],
            profile: {
                firstName: "Roberto",
                lastName: "Luna"
            },
        });
        console.log('Usuario creado exitosamente con ID:', user._id);

    } catch (err) {
        console.error('Error creando usuario:', err);
    } finally {
        process.exit(0);
    }
})();
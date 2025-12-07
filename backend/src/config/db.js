const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        const uri = process.env.MONGODB_URI;
        if (!uri){
            throw new Error('MONGODB_URI no está definida');
        }

        await mongoose.connect(uri);
        console.log('Conectando a MongoDB');
    } catch (error){
        console.error('Error al conectar a MongoDB',error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
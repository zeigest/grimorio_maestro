const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login',async(req, res)=>{
    try{
        const {username,password} = req.body;
        if (!username || !password){
            return res.status(400).json({message: 'Usuario y contraseña son requeridos'});
        }

        const user = await User.findOne({username}).select('+password');
        
        if (!user){
            return re.status(401).json({message: 'Credenciales incorrectas'})
        }
        const isValid = await user.correctPassword(password);
        if (!isValid){
            return res.status(401).json({message: 'Credenciales incorrectas'});
        }
        
        const safeUser = {
            id: user._id,
            username: user.username,
            profile: user.profile,
            roles: user.roles,
        };

        return res.status(200).json({
            message: 'Login exitoso',
            user: safeUser,
        });
    } catch (err) {
        console.error('Error en /api/auth/login:',err);
        return res.status(500).json({message:'Error interno del servidor'});
    }
});

module.exports = router;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Escribe un correo válido'],
        },
        password: {
            type: String,
            required: [true, 'Ingresa una contraseña'],
            minlength: 8,
            select: false,
        },
        roles: {
            type: [String],
            enum: ['PLAYER','DM','ADMIN'],
            default: ['PLAYER'],
        },
          profile: {
            firstName: { type: String },
            lastName:  { type: String },
            avatarUrlImg: {
                type: String,
                default: './public/img/defaulPrifileUser.webp'
            },
        },
        isActive: {
            type: Boolean,
            default: true
        },
            },
        {
            timestamps: true,
        }
        );

userSchema.pre('save',async function() {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword,userPassword);
};

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const objectSchema = new mongoose.Schema(
    {
        objectName: {
            type: String,
            required: true,
            trim: true
        },
        objectType: {
            type: String,
            required: true,
            enum: ['Arma', 'Poción', 'Armadura', 'Herramienta', 'Elemento Clave'],
            default: 'Herramienta'
        },
        objectDescription: {
            type: String,
        },
        objectRarity: {
            type: String, 
            enum: ['Común', 'Rara', 'Legendaria'],
            default: 'Común',
            required: true
        },
        objectStats: {
            type: mongoose.Schema.Types.Mixed,
            default: {}
        },
        objectIsEquipable: {
            type: Boolean,
            default: false
        },
        objectPartBody: {
            type: String,
            enum: [
                'Cabeza', 'Cara', 'Cuello', 'Torso', 
                'Hombros', 'Brazos', 'Manos', 'Dedos', 
                'Cintura', 'Piernas', 'Pies', 'Cuerpo'
            ],
            default: null
        }
    }, 
    { 
        timestamps: true 
    } 
);

module.exports = mongoose.model('Objects', objectSchema);


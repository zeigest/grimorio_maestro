const mongoose = require('mongoose');

const spellSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        level: {
            type: Number,
            required: true,
            min: 0, 
            max: 9
        },
        isCantrip: {
            type: Boolean,
            default: false
        },
        casting: {
            actions: {
                type: String, 
                enum: ['1', '2', '3', 'Reacción', 'Acción Gratuita', 'Actividad'],
                required: true
            },
            components: [String], 
            trigger: { type: String, default: null }
        },
        range: { type: String, default: null },
        area: { type: String, default: null },
        target: { type: String, default: null },
    
        savingThrow: {
            statistic: { 
                type: String, 
                enum: ['Fortaleza', 'Reflejos', 'Voluntad', null],
                default: null
            },
            basic: { type: Boolean, default: false }
        },
        
        description: { type: String, required: true },
        duration: {
            value: { type: String },
            sustained: { type: Boolean, default: false }
        },
    },
    { timestamps: true }
);

spellSchema.index({ name: 1 });

module.exports = mongoose.model('Spells', spellSchema);
const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Objects',
    },
        inventoryOwnerType: {
            type: String,
            enum: ['Character','Party'],
            default: 'Character'
        },
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            refPath: 'inventoryOwnerType'
        },
        quantity: {
            type: Number,
            default: 1
        },
        inventoryIsAssigned: {
            type: Boolean,
            default: false
        },
        inventoryState:{
            type: mongoose.Schema.Types.Mixed,
            default: {}
        },
},
{
    timestamps: true
});

inventorySchema.index({ ownerId: 1, inventoryOwnerType: 1 });
module.exports = mongoose.model('Inventory', inventorySchema);
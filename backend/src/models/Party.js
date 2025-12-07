const mongoose = require('mongoose');

const partySchema = new mongoose.Schema(
    {
        partyName: {
            type: String,
            required: true,
            trim: true
        },
        dmUserId: {
           type: mongoose.Schema.Types.ObjectId,
           required: true,
           ref: 'User'
        },
        partyReputation: {
            type: Number,
            required: true,
            default: 0
        },
        partyMembers: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Character',
        }],
        partyMission: {
            type: String,
            default: null
        },
        partySharedWallet: {
            coinCopper: {type: Number, default: 0},
            coinSilver: {type: Number, default: 0},
            coinGold: {type: Number, default: 0},
            coinPlatinum: {type: Number, default: 0},
        },
        partyAchievements: {
            type: [String],
            default: []
        }
         },
         {
            timestamps: true
         }
  );

partySchema.index({ dmUserId: 1 });
module.exports = mongoose.model('Party', partySchema);
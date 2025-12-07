const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        partyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Party',
            default: null
        },
        ownerCharacterId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Character',
            default: null
        },
        charName: {
            type: String,
            required: true,
            trim: true
        },
        charBasicStats: {
            race: {type: String, required: true},
            class: {type: String, required: true},
            level: {type: Number, default: 1},
            alignment: {type: String}
        },
        charAttrib: {
            str: {type: Number, default: 10},
            dex: {type: Number, default: 10},
            con: {type: Number, default: 10},
            int: {type: Number, default: 10},
            wis: {type: Number, default: 10},
            cha: {type: Number, default: 10}
        },
        charCombat: {
            hpMax:{type: Number, default: 10},
            hpCurrent:{type: Number, default: 10},
            ac:{type: Number, default: 10},
            speed:{type: Number, default: 30},
            init:{type: Number, default: 0}
        },
        charEquipment: {
            mainHand: { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
            offHand:  { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
            head:  { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
            armor: { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null }, 
            feet:  { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
            neck: { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
            fingers: {
                leftPinky:   { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
                leftRing:    { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
                leftMiddle:  { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
                leftIndex:   { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
                leftThumb:   { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
                rightPinky:  { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
                rightRing:   { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
                rightMiddle: { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
                rightIndex:  { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
                rightThumb:  { type: mongoose.Schema.Types.ObjectId, ref: 'Objects', default: null },
            }
        },
        charResources: [{
            name: String,
            max: Number,
            current: Number
        }],
        charSkills: [{
            name: String,
            mod: Number,
            prof: Boolean
        }],
        charFeatures: [{
            name: String,
            desc: String
        }],
        charSpellcasting: {
            slots: [ 
                {
                    level: { type: Number, required: true },
                    total: { type: Number, default: 0 },
                    used:  { type: Number, default: 0 }
                }
            ],
            knownSpells: [{
                spellId: { type: mongoose.Schema.Types.ObjectId, ref: 'Spells' },
                prepared: { type: Boolean, default: false }
            }],
            spellAttackBonus: { type: Number, default: 0 },
            spellSaveDC: { type: Number, default: 10 }
        }
    },
    {
        timestamps: true
    }
);

characterSchema.index({ userId: 1 });

module.exports = mongoose.model('Character', characterSchema);
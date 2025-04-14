const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    pets: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Pet',
        default: []
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    userType: {
        type: String,
        enum: ['buyer', 'seller'],
        default: 'buyer'
    },
    cart:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    favourites:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
}, {
    timestamps: true
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;
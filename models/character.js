const mongoose = require('mongoose');
const { Schema } = mongoose;


const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: URL, 
        required: true,
    },
    franchise: {
        type: String, 
        required: true,
    },
    bio: {
        type: String, 
        required: true,
    },
    points: {
        type: Integer,
        required: true,
    },
});

const Character = mongoose.model('characterData', characterSchema);
module.exports = Character;
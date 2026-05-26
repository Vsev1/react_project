const mongoose = require("mongoose");

const CallbackRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("CallbackRequest", CallbackRequestSchema);
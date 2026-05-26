const mongoose = require("mongoose");

const FormRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: "",
    },
    selectedOption: {
        value: { type: String, required: true },
        label: { type: String, required: true }
    },
    message: {
        type: String,
        default: "",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("FormRequest", FormRequestSchema);
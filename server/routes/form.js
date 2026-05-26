const express = require("express");
const router = express.Router();
const FormRequest = require("../models/FormRequest");

router.post("/request", async (req, res) => {
    try {
        const newRequest = await FormRequest.create(req.body);
        res.status(201).json(newRequest);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
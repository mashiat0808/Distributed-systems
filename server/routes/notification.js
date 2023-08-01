const express = require("express");
const router= express.Router();
const {Notifications} = require('../models/notification');
const authenticateToken = require('../middleware/auth');


router.get('/notification',authenticateToken, async (req, res) => {
    const fetchAllNotifications = await Notifications.find();
    res.json(fetchAllNotifications);
});

module.exports = router;
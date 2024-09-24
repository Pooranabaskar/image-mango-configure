const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/employee/:employeeId', (req, res) => {
    const { employeeId } = req.params;
    User.findOne({ employeeId }, (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching user details' });
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({
            profilePhoto: user.profilePhoto.toString('base64'),
            name: user.name,
            email: user.email,
            employeeId: user.employeeId,
            phoneNumber: user.phoneNumber
        });
    });
});

module.exports = router;

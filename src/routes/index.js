const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const User = require('../models/user');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/view', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/view.html'));
});

router.post('/submit', upload.single('profilePhoto'), (req, res) => {
    const { name, email, employeeId, phoneNumber } = req.body;
    const profilePhoto = req.file.buffer;

    const newUser = new User({ profilePhoto, name, email, employeeId, phoneNumber });
    newUser.save()
        .then(() => res.send('User details saved successfully!'))
        .catch(err => res.status(500).send('Error saving user details: ' + err));
});

module.exports = router;

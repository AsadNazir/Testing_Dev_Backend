const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    res.status(200).json({
        error: false,
        message: "",
        data: "HEllo from user router"
    });
});

router.post('/upload', (req, res) => {    
    res.status(200).json({
        error: false,
        message: "",
        data: "HEllo from user router"
    });
});


module.exports = router;
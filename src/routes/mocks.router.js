const express = require('express');
const router = express.Router();
const Mocking = require('../modules/mocking');
const UserController = require('../controllers/users.controller');
const PetController = require('../controllers/pets.controller');

// Endpoint to get mocking pets
router.get('/mockingpets', PetController.getMockingPets);

// Endpoint to generate 50 mocking users
router.get('/mockingusers', (req, res) => {
    const users = Mocking.generateUsers(50);
    res.json(users);
});

// Endpoint to generate and insert data into the database
router.post('/generateData', async (req, res) => {
    const { users, pets } = req.body;

    try {
        await UserController.generateAndInsertUsers(users);
        await PetController.generateAndInsertPets(pets);
        res.status(201).send('Data generated and inserted successfully');
    } catch (error) {
        res.status(500).send('Error generating data: ' + error.message);
    }
});

module.exports = router;
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.route('/').get(userController.getUsers);

router.route('/').post(userController.createUser);

router.route('/:id').get(userController.getUserById);

router.route('/:id').put(userController.updateUser);

router.route('/:id').delete(userController.deleteUser);

module.exports = router ;
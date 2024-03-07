// Importing necessary functionalities from Express.js framework and user controller module
import express from 'express';
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
} from '../controllers/userController.js'; // Importing functions from userController.js module

// Creating an instance of Express's Router
const router = express.Router();

// Route definitions
router
    .route('/') // Define routes for user registration and retrieving all users
    .post(registerUser) // For HTTP POST requests to '/', invoke registerUser function
    .get(getUsers); // For HTTP GET requests to '/', invoke getUsers function

router.post('/login', authUser); // Define a route for user authentication

router
    .route('/profile') // Define routes for user profile operations
    .get(getUserProfile) // For HTTP GET requests to '/profile', invoke getUserProfile function
    .put(updateUserProfile); // For HTTP PUT requests to '/profile', invoke updateUserProfile function

router
    .route('/:id') // Define routes for operations on individual users identified by their ID
    .delete(deleteUser) // For HTTP DELETE requests to '/:id', invoke deleteUser function
    .get(getUserById) // For HTTP GET requests to '/:id', invoke getUserById function
    .put(updateUser); // For HTTP PUT requests to '/:id', invoke updateUser function
router
    .post('/logout', logoutUser);
// Exporting the router instance as the default export of this module
export default router;

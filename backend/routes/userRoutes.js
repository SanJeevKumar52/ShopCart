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
import {protect, admin} from '../middleware/authMiddleware.js';
// Creating an instance of Express's Router
const router = express.Router();

// Route definitions
router
    .route('/') // Define routes for user registration and retrieving all users
    .post(registerUser) // For HTTP POST requests to '/', invoke registerUser function
    .get(protect,admin,getUsers); // For HTTP GET requests to '/', invoke getUsers function

router.post('/auth', authUser); // Define a route for user authentication

router
    .route('/profile') // Define routes for user profile operations
    .get(protect,getUserProfile) // For HTTP GET requests to '/profile', invoke getUserProfile function
    .put(protect,updateUserProfile); // For HTTP PUT requests to '/profile', invoke updateUserProfile function

router
    .route('/:id') // Define routes for operations on individual users identified by their ID
    .delete(protect,admin,deleteUser) // For HTTP DELETE requests to '/:id', invoke deleteUser function
    .get(protect,admin,getUserById) // For HTTP GET requests to '/:id', invoke getUserById function
    .put(protect,admin,updateUser); // For HTTP PUT requests to '/:id', invoke updateUser function
router
    .post('/logout', logoutUser);
// Exporting the router instance as the default export of this module
export default router;

const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  getUsers,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Public routes
router.post('/login', loginUser);

// Protected routes
router.get('/me', protect, getMe);

// Admin only routes
router.post('/register', protect, adminOnly, registerUser);
router.get('/', protect, adminOnly, getUsers);
router.put('/:id', protect, adminOnly, updateUser);
router.delete('/:id', protect, adminOnly, deleteUser);

module.exports = router;

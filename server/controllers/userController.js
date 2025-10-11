const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const { generateToken } = require('../middleware/authMiddleware');

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Private/Admin
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role, agency, state } = req.body;

  // Validation
  if (!name || !email || !password || !role) {
    res.status(400);
    throw new Error('Please provide all required fields');
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Validate role-specific requirements
  if (role === 'Agency-User' && !agency) {
    res.status(400);
    throw new Error('Agency-User must be assigned to an agency');
  }

  if (role === 'State-Admin' && !state) {
    res.status(400);
    throw new Error('State-Admin must be assigned to a state');
  }

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role,
    agency: role === 'Agency-User' ? agency : undefined,
    state: role === 'State-Admin' ? state : undefined,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      agency: user.agency,
      state: user.state,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Authenticate user & get token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    res.status(400);
    throw new Error('Please provide email and password');
  }

  // Check for user
  const user = await User.findOne({ email }).select('+password').populate('agency');

  if (user && (await user.matchPassword(password))) {
    if (!user.isActive) {
      res.status(401);
      throw new Error('User account is inactive');
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      agency: user.agency,
      state: user.state,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Get current user
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    role: req.user.role,
    agency: req.user.agency,
    state: req.user.state,
  });
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const { role, state, agency, isActive } = req.query;
  
  let query = {};
  
  if (role) query.role = role;
  if (state) query.state = state;
  if (agency) query.agency = agency;
  if (isActive !== undefined) query.isActive = isActive === 'true';

  const users = await User.find(query)
    .select('-password')
    .populate('agency')
    .sort({ createdAt: -1 });

  res.json(users);
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const { name, email, role, agency, state, isActive } = req.body;

  user.name = name || user.name;
  user.email = email || user.email;
  user.role = role || user.role;
  user.agency = agency !== undefined ? agency : user.agency;
  user.state = state || user.state;
  user.isActive = isActive !== undefined ? isActive : user.isActive;

  const updatedUser = await user.save();

  res.json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    role: updatedUser.role,
    agency: updatedUser.agency,
    state: updatedUser.state,
    isActive: updatedUser.isActive,
  });
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  await user.deleteOne();

  res.json({ message: 'User removed' });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
  getUsers,
  updateUser,
  deleteUser,
};

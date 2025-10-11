const express = require('express');
const router = express.Router();
const {
  createAgency,
  getAgencies,
  getAgencyById,
  updateAgency,
  deleteAgency,
} = require('../controllers/agencyController');
const { protect, adminOnly, stateAdminOnly } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, getAgencies)
  .post(protect, stateAdminOnly, createAgency);

router.route('/:id')
  .get(protect, getAgencyById)
  .put(protect, stateAdminOnly, updateAgency)
  .delete(protect, adminOnly, deleteAgency);

module.exports = router;

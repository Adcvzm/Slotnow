const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

// Get all departments
router.get('/', async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (error) {
        console.error('Get departments error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Get department by name
router.get('/:name', async (req, res) => {
    try {
        console.log('Fetching department:', req.params.name);
        const department = await Department.findOne({ name: req.params.name });
        if (!department) {
            console.log('Department not found:', req.params.name);
            return res.status(404).json({ message: 'Department not found' });
        }
        console.log('Department found:', department);
        res.json(department);
    } catch (error) {
        console.error('Get department error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Update department (admin only)
router.put('/:id', async (req, res) => {
    try {
        const { availableSlots, nextAvailableDate } = req.body;
        const department = await Department.findById(req.params.id);

        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }

        department.availableSlots = availableSlots;
        department.nextAvailableDate = nextAvailableDate;
        await department.save();

        res.json(department);
    } catch (error) {
        console.error('Update department error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router; 

const express = require('express');
const router = express.Router();
const db = require('../db/index');
const calculator = require('../points_calculator/index');


router.get('/', function (req, res, next) {
    res.render('index', {employees: db.getAllEmployees()});
});

router.post('/register-employee', function (req, res) {
    const employee = req.body;
    db.registerEmployee(employee.name, employee.id, employee.startDate, employee.seniority);
    res.redirect('/');
});

router.get('/accrue-monthly-points', function (req, res) {
    const employees = db.getAllEmployees();
    for (let index =0;index< employees.length;index++) {
        const employee = employees[index];
        const pointsToUpdate = calculator.getPoints(employee);
        db.incrementEmployeePoints(employee, pointsToUpdate);
    }
    res.redirect('/');
});

module.exports = router;

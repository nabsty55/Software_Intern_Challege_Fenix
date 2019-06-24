let employees = [];
let count = 0;

module.exports = {
    registerEmployee: function (name, employeeID, startDate, seniority) {
        employees.push({
            uniqueID: count++,
            name: name,
            employeeID: employeeID,
            startDate: startDate,
            seniority: seniority,
            totalPoints: 0
        });
    },

    getAllEmployees: function () {
        return employees;
    },

    incrementEmployeePoints: function (employeeToUpdate, pointsToAdd) {
        employees = employees.map(employee => {
            if (employee.uniqueID === employeeToUpdate.uniqueID) {
                return {
                    uniqueID: employeeToUpdate.uniqueID,
                    name: employeeToUpdate.name,
                    employeeID: employeeToUpdate.employeeID,
                    startDate: employeeToUpdate.startDate,
                    seniority: employeeToUpdate.seniority,
                    totalPoints: employeeToUpdate.totalPoints + pointsToAdd
                };
            } else {
                return employee;
            }
        });

    }
};
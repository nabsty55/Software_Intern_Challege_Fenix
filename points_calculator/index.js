const getSeniorityPoints = function (level) {
    console.log("seniority", level);
    if (level === 'A') {
        return 5;
    } else if (level === 'B') {
        return 10;
    } else if (level === 'C') {
        return 15;
    } else if (level === 'D') {
        return 20;
    } else if (level === 'E') {
        return 25;
    }
};

const getTenureMultiplier = function (numberOfYears) {
    if (numberOfYears < 2) {
        return 1;

    } else if (numberOfYears < 4) {
        return 1.25;
    } else {
        return 1.5;
    }
};

const getNumbersOfYearsThatHavePassedTillNow = function (employee) {
    let diff = ((new Date()).getTime() - (new Date(employee.startDate)).getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365.25));
};

module.exports = {
    getPoints: function (employee) {
        console.log("employee Passed", employee);
        const points = getSeniorityPoints(employee.seniority);

        const yearsAtCompany = getNumbersOfYearsThatHavePassedTillNow(employee);
        const multiplier = getTenureMultiplier(yearsAtCompany);
        console.log({points: points, yearsAtCompany: yearsAtCompany, multiplier: multiplier});
        return points * multiplier;
    }
};

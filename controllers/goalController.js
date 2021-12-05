const goalsData = require('../data/goalsData');

exports.getGoals = (req, res, next) => {
    try {
        const goalsList = goalsData.goalsList;
        res.status(200).json({ goalsList });
    } catch (err) {
        res.status(400).json({ message: "Une erreur est survenue, veuillez essayer à nouveau", error: err });
    }
};

exports.updateGoal = (req, res, next) => {
    try {
        goalsData.updateGoal = {...req.body};
        const goalsList = goalsData.goalsList;
        res.status(200).json({ goalsList });
    } catch (err) {
        res.status(400).json({ message: "Une erreur est survenue, veuillez essayer à nouveau", error: err });
    }
};

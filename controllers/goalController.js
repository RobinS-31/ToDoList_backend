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
        goalsData.updateGoal = { ...req.body };
        const goalsList = goalsData.goalsList;
        res.status(200).json({ goalsList });
    } catch (err) {
        res.status(400).json({ message: "Une erreur est survenue, veuillez essayer à nouveau", error: err });
    }
};

exports.addGoal = (req, res, next) => {
    try {
        const goal = { ...req.body };

        if (goal.title.length !== 0) {
            goalsData.addGoal = { ...goal };
            const goalsList = goalsData.goalsList;
            res.status(201).json({ goalsList });
        } else {
            res.status(200).json({ message: "Veuillez ajouter un titre."})
        }
    } catch (err) {
        res.status(400).json({ message: "Une erreur est survenue, veuillez essayer à nouveau", error: err });
    }
};

exports.removeGoal = (req, res, next) => {
    try {
        const { id } = req.params;
        goalsData.removeGoal = parseInt(id);
        const goalsList = goalsData.goalsList;
        res.status(202).json({ goalsList });
    } catch (err) {
        res.status(400).json({ message: "Une erreur est survenue, veuillez essayer à nouveau", error: err });
    }
};

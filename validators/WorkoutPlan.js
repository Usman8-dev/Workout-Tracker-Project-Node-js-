const { body } = require('express-validator');

exports.WorkOutPlanValidation = [
    body('Name')
        .notEmpty().withMessage('Name is required'),
];


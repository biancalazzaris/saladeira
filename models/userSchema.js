const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string()
        .min(3)
        .max(150)
        .required(),
    age: Joi.number()
        .integer()
        .min(18)
        .required(),
    city: Joi.string()
        .min(4)
        .max(100),
    state: Joi.string()
        .length(2),
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: {
                allow:
                    [
                        'com', 
                        'net', 
                        'br', 
                        'co', 
                        'me', 
                        'arg'
                    ]
            }
        })


});
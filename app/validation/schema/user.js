const Joi = require('joi');
const userDataMapper = require('../../dataMappers/userDataMapper');
const patternMail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

const userSchema = Joi.object({
    first_name: Joi.string().required()
    .messages({
        'string.base':`first_name doit être de type "STRING.`
    }),
    last_name: Joi.string().required()
    .messages({
        'string.base':`last_name doit être de type "STRING.`
    }),
    adress: Joi.string().required(),
    zip_code: Joi.string().required(),
    city: Joi.string().required(),
    latitude: Joi.number(),
    longitude: Joi.number(),
    email: Joi.string().regex(patternMail).messages({
        'string.base' : ` mail doit etre de type "STRING.`,
        'any.required' :  `L'email est obligatoire`,
        'string.email' : "L'email est invalide"
    }).required(),
    password: Joi.string().required().pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/)
    .messages({  
        'string.base': `Le mot de passe doit être de type "STRING.`,
        'any.required': 'Le mot de passe est obligatoire.',
        'string.pattern': 'Le mot de passe doit contenir 8 caractères minimum, dont une minuscule, une majuscule, un nombre et un caractère spécial parmis : !@#$%^&* .'
    }),
    repeat_password: Joi.ref('password'),
    company_name: Joi.string(),
    shop_name: Joi.string(),
    registration_number: Joi.string().min(5).max(14),
    role_id: Joi.number().integer().required(),
    activity_id: Joi.number(),
    // content: Joi.string(),
});

module.exports = userSchema;
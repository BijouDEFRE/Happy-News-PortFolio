const Joi = require('joi');
const userDataMapper = require('../../dataMappers/userDataMapper');

const userSchema = Joi.object({
    first_name: Joi.string().required()
    .messages({
        'string.base':`first_name doit être de type 'string'`
    }),
    last_name: Joi.string().required()
    .messages({
        'string.base':`last_name doit être de type 'string'`
    }),
    adress: Joi.string(),
    zip_code: Joi.string(),
    city: Joi.string(),
    email: Joi.string().email()
    .messages({
        'string.base':`mail doit-être de type 'string'`,
        'any.required': 'email est obligatoire',
        'string.email': 'email invalide'
    }),
    password: Joi.string().required().pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/)
    .messages({  
        'string.base': `Le mot de passe doit être de type 'string'.`,
        'any.required': 'Le mot de passe est obligatoire.',
        'string.pattern': 'Le mot de passe doit contenir 8 caractères minimum, dont une minuscule, une majuscule, un nombre et un caractère spécial parmis : !@#$%^&* .'
    }),
    repeat_password: Joi.ref('password'),
    company_name: Joi.string(),
    shop_name: Joi.string(),
    registration_number: Joi.number().integer().min(5).max(14),
    user_id: Joi.number().integer().min(1).required()
                    .external(async (value) => {
                        // Vérifier que value correspond à un id existant
                        const user = await userDataMapper.getUserById(value);

                        if (! user) {
                            // remonter l'erreur
                            throw new Error('user.invalid');
                        }

                        return value;
                    }, "Le user_id doit exister"),
});

module.exports = userSchema;
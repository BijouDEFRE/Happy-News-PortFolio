const Joi = require('joi');
const userDataMapper = require('../../dataMappers/userDataMapper');

const postSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    adress: Joi.string(),
    zip_code: Joi.string(),
    city: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    company_name: Joi.string(),
    shop_name: Joi.string(),
    registration_number: Joi.number().integer().min(5).max(8).required(),
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

module.exports = postSchema;
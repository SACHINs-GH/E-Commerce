const Joi = require('joi');

const validUserSchema = Joi.object({
    email: Joi.string().email().required().lowercase().trim().messages({
            'string.email': 'Invalid email format',
            'any.required': 'Email is required'}),
    userType: Joi.string().valid('buyer', 'seller').default('buyer')
        .messages({
            'any.only': 'User type must be either buyer or seller'
        }),
    cart: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)) // Validates MongoDB ObjectId
        .messages({
            'string.pattern.base': 'Invalid product ID in cart'
        }),
    favourites: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)) // Validates MongoDB ObjectId
        .messages({
            'string.pattern.base': 'Invalid product ID in favourites'
        }),
});

module.exports=validUserSchema;
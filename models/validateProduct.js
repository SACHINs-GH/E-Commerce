const Joi=require('joi');

const validProductSchema = Joi.object({
    productName: Joi.string().required(),
    productDescription: Joi.string().required(),
    productPrice: Joi.number().min(0).required(),
});

module.exports=validProductSchema;
const { Product, Category  } = require('../../../models/index');
const { handlerError, validator } = require('../util.js');



const getCategoryProductsPageAndSize_validator = (req, res, next  ) => {
    let params =[
        {name:"page",type:"number"},
        {name:"size",type:"number"},
        {name:"id",type:"number", param:true}
    ]
    if(validator(params,req,res)) next();
}

const getCategoryProductsPageAndSize = async(req, res, next  ) => {
    const { page, size } = req.body;
    const { id }= req.params;
    try {
        let category = await Category.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [
                {
                    model: Product,
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    offset: (page-1)*size,
                    limit: size,
                },
            ],
            where: {
                id
            }
        });
        if(category.length == 1){
            category.map(el => el.get({ plain: true })) 
            res.json(category[0])  
        }else{
            res.status(404).send('ok') 
        }
    } catch (error) {
        handlerError(error.res)
    }
}

module.exports = {
    getCategoryProductsPageAndSize,
    //validators
    getCategoryProductsPageAndSize_validator
}
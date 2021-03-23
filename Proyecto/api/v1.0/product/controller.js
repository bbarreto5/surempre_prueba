const { Product, Category, Supplier  } = require('../../../models/index');
const { Op, or } = require('sequelize');
const { handlerError, validator } = require('../util.js');


const getProductsPageAndSize = async (req, res, next)=> {
    const { page, size } = req.body;

    let products = await Product.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'CategoryId', 'SupplierId'] },
        offset: (page-1)*size,
        limit: size,
        include: [
            {
                model: Category,
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            },
            {
                model: Supplier,
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            }
        ],
        order:["id"]
    });
    products.map(el => el.get({ plain: true })) 
    res.json(products)
}
const getProductsPageAndSize_validator = (req, res, next  ) => {
    let params =[
        {name:"page",type:"number"},
        {name:"size",type:"number"},
    ]
    if(validator(params,req,res)) next();
}

const getProductsSearch = async (req, res, next)=> {
    const { page, size, name, category } = req.body;

    let products = await Product.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'CategoryId', 'SupplierId'] },
        offset: (page-1)*size,
        limit: size,
        include: [
            {
                model: Category,
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            },
            {
                model: Supplier,
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            }
        ],
        order:["id"],
        where: or(
            {
                ProductName: {
                    [Op.like]:{ [Op.any]:name.split(" ").map( c => `%${c}%`) } ,
                }
            },
            {
                CategoryId:{
                    [Op.eq]:category
                }
            }
        )
    });
    products.map(el => el.get({ plain: true })) 
    res.json(products)
}
const getProductsSearch_validator = (req, res, next  ) => {
    let params =[
        {name:"page",type:"number"},
        {name:"size",type:"number"},
        {name:"name",type:"string"},
        {name:"category",type:"number"},
    ]
    if(validator(params,req,res)) next();
}

const createProduct = async (req, res, next)=> {
    const {
        ProductName,
        SupplierId,
        CategoryId,
        QuantityPerUnit,
        UnitPrice,
        UnitsInStock,
        UnitsOnOrder,
        ReorderLevel,
        Discontinued
    } = req.body;
    try {
        let newP = await Product.create({
            ProductName,
            SupplierId,
            CategoryId,
            QuantityPerUnit,
            UnitPrice,
            UnitsInStock,
            UnitsOnOrder,
            ReorderLevel,
            Discontinued
        });
        res.json({
            Product:newP.get({ plain: true }),
            message:"Producto agregado"
        })
    } catch (error) {
        handlerError(error,res);
    }
}
const createProduct_validator = (req, res, next  ) => {
    let params =[
        {name:"ProductName",type:"string"},
        {name:"SupplierId",type:"string"},
        {name:"CategoryId",type:"string"},
        {name:"QuantityPerUnit",type:"string"},
        {name:"UnitPrice",type:"string"},
        {name:"UnitsInStock",type:"string"},
        {name:"UnitsOnOrder",type:"string"},
        {name:"ReorderLevel",type:"string"},
        {name:"Discontinued",type:"string"},
    ]
    if(validator(params,req,res)) next();
}

module.exports = {
    getProductsPageAndSize,
    getProductsSearch,
    createProduct,
    //validators
    getProductsPageAndSize_validator,
    getProductsSearch_validator,
    createProduct_validator
}
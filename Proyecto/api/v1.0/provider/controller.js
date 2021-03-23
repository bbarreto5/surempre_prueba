const { Supplier, Product  } = require('../../../models/index');
const { literal } = require('sequelize');
const { handlerError, validator } = require('../util.js');


const getProvider = async (req, res, next)=> {
    try {
        const { id } = req.params;
        let provider = await Supplier.findAll({
            raw: true,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where:{
                id
            },
            limit:1
        });
        if(provider.length == 1){
            res.json(provider[0])   
        }else{
            res.status(404).send('ok') 
        }
    } catch (error) {
        handlerError(error,res)
    }
}
const getProvider_validator = (req, res, next  ) => {
    let params =[
        {name:"id",type:"number", param:true}
    ]
    if(validator(params,req,res)) next();
}

const getProviderProducts = async (req, res, next)=> {
    try {
        const { id } = req.params;
        let provider = await Supplier.findAll({
            attributes: { 
                exclude: ['createdAt', 'updatedAt'],
                [literal('Products')]: 'companyName'
            },
            where:{
                id
            },
            include:{
                model: Product,
                attributes: { exclude: ['createdAt', 'updatedAt', 'CategoryId', 'SupplierId'] }
            }
        });
        if(provider.length == 1){
            provider.map(el => el.get({ plain: true })) 
            res.json(provider[0])   
        }else{
            res.status(404).send('ok') 
        }
    } catch (error) {
        handlerError(error,res)
    }
}

const createSupplier = async(req, res, next)=>{
    const {
        CompanyName,
        ContactName,
        ContactTitle,
        Address,
        City,
        Region,
        PostalCode,
        Country,
        Phone,
        Fax,
        HomePage
    } = req.body

    try {
        let newS = await Supplier.create({
            CompanyName,
            ContactName,
            ContactTitle,
            Address,
            City,
            Region,
            PostalCode,
            Country,
            Phone,
            Fax,
            HomePage
        });
        res.json({
            Provider:newS.get({ plain: true }),
            message:"Proveedor agregado"
        })
    } catch (error) {
        handlerError(error,res)
    }
}
const createSupplier_validator = (req, res, next  ) => {
    let params =[
        {name:"CompanyName",type:"string"},
        {name:"ContactName",type:"string"},
        {name:"ContactTitle",type:"string"},
        {name:"Address",type:"string"},
        {name:"City",type:"string"},
        {name:"Region",type:"string"},
        {name:"PostalCode",type:"string"},
        {name:"Country",type:"string"},
        {name:"Phone",type:"string"},
        {name:"Fax",type:"string"},
        {name:"HomePage",type:"string"}
    ]
    if(validator(params,req,res)) next();
}

const deleteProvider = async(req, res, next)=>{
    try {
        const { id } = req.params;
        let provider = await Supplier.findAll({
            where:{
                id
            },
            limit:1
        });
        if(provider.length == 1){
            await provider.forEach( p => p.destroy());
            res.json(provider)   
        }else{
            res.status(404).send('ok') 
        }
    } catch (error) {
        handlerError(error,res)
    }
}

module.exports = {
    getProvider,
    getProviderProducts,
    createSupplier,
    deleteProvider,
    //validators
    createSupplier_validator,
    getProvider_validator
}
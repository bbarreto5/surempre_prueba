const validatorError = "Validator_Error"

const handlerError = (error,res) => {
    switch (error.name) {
        case "SequelizeForeignKeyConstraintError":
            return res.status(400).json({
                message:error.parent.detail
            })
        case validatorError:
            return res.status(400).json({
                message:error.message
            })
        default:
            return res.status(500).json();
    }
}

const getParam = (item, req) => item.param ? req.params[item.name] : req.body[item.name]

/**
 * [{name:"id",type:"int",param:true}]
 * param es true cuando el parametro es enviado por la url
 * type: number | string
 */
const validator = (lista,req,res)=>{
    for (let i = 0; i < lista.length; i++) {
        let item, param;
        item = lista[i];
        param = getParam(item,req);
        if(typeof param === 'undefined' ){
            handlerError({
               name: validatorError,
               message: `El parametro ${item.name} es indefinido` 
            },res)
            return false;
        }else if(typeof param == null ){
            handlerError({
               name: validatorError,
               message: `El parametro ${item.name} es indefinido` 
            },res)
            return false;
        }else if( item.param == true && typeof param !== item.type ){
            if ( item.type == "number" && !isNaN(Number(param)) ) continue;
            handlerError({
                name: validatorError,
                message: `El parametro ${item.name} no es de tipo ${item.type}` 
             },res)
             return false;
        }
        else if(typeof param !== item.type){
            handlerError({
                name: validatorError,
                message: `El parametro ${item.name} no es de tipo ${item.type}` 
             },res)
             return false;
        }
    }
    return true
}

module.exports = {
    handlerError,
    validator
}
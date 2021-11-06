const {response, request} = require ('express');

//http://localhost:8080/api/emprendedor?a=valuea&b=valueb&c=valuec
const emprendedorGet = (req = request, res = response)=> {
   const {a,b ='null',c} = req.query;

    res.json({
        msg:'emprendedorGet',
        a,
        b,
        c

    }); 
}

const emprendedorPost = (req, res = response)=> {

    const body =req.body;

    res.json({
        msg:'emprendedorPost',
        body
    }); 
}

const emprendedorPut = (req, res = response)=> {

    const {cedulaEmprendedor}= req.params;
    res.json({
        msg:'emprendedorPut',
        cedulaEmprendedor
    }); 
}

module.exports = {
    emprendedorGet,
    emprendedorPost,
    emprendedorPut,
}
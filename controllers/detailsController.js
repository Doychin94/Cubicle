const router = require("express").Router()
const { getCube } = require("../services")

router.get("/:productId",(req,res) =>{
    let cube = getCube(req.params.productId)
    res.render("details",cube)
    
})


module.exports = router
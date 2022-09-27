const router = require("express").Router()
let { addCube } = require("../services")


router.get("/",(req,res) =>{
    res.render("create")
})

router.post("/",(req,res) =>{
    let cube = req.body
    let newCube = {
        id:"asdf" + Math.floor(Math.random() * 99999),
        name:cube.name,
        description:cube.description,
        img:cube.img,
        dificulty:cube.dificulty
    }
    addCube(newCube)
    res.redirect("/")

})


module.exports = router
const fs = require("fs")

let cubesData = JSON.parse(fs.readFileSync("./config/database.json"))

function getAllData(){
    return cubesData
}

function getCube(id){
    let cube = cubesData.find(c => c.id === id)
    return cube
}


function addCube(cube){
    cubesData.push(cube)
    fs.writeFile("./config/database.json",JSON.stringify(cubesData),(err) =>{
        if(err !== null){
           return console.log(err)
        }
        
    })
}

module.exports = {
getAllData,
getCube,
addCube
}
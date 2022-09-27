const router = require("express").Router();
const { getAllData } = require("../services");

router.get("/", (req, res) => {
  res.locals.title = "Home Page";

  let searchData = req.query;
  let cubes = getAllData();

  if (Object.entries(searchData).length > 0) {
    if (searchData.search !== "") {
      cubes = cubes.filter((c) => ((c.name).toLowerCase()).includes( searchData.search.toLocaleLowerCase()));
    }
    if(searchData.from !== ""){
        cubes = cubes.filter((c => Number(c.dificulty) >= Number(searchData.from)))
    }
    if(searchData.to !== ""){
        cubes = cubes.filter((c => Number(c.dificulty) <= Number(searchData.to)))
    }
  }

  res.render("index", {
    cubes,
  });
});

module.exports = router;

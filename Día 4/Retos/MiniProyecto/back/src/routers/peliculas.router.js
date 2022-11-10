const {Router} = require("express");
const router = Router();
const peliCtrl = require("../controllers/peliculas.controller")

router.get("/peliculas", peliCtrl.getPeli)
router.post("/peliculas", peliCtrl.postPeli)
router.put("/peliculas", peliCtrl.putPeli)
router.delete("/peliculas",peliCtrl.delPeli)

module.exports = router;
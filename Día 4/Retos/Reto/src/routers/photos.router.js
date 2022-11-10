const {Router} = require("express");
const router = Router();
const photoCtrl = require("../controllers/photos.controller")

router.get("/photo", photoCtrl.getPhoto)
router.post("/photo", photoCtrl.postPhoto)
router.put("/photo", photoCtrl.putPhoto)
router.delete("/photo",photoCtrl.delPhoto)

module.exports = router;
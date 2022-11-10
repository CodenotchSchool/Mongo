const {Router} = require("express");
const router = Router();
const profCtrl = require("../controllers/profesional.controller")

router.get("/profesionales", profCtrl.getProf)
router.post("/profesionales", profCtrl.postProf)
router.put("/profesionales", profCtrl.putProf)
router.delete("/profesionales",profCtrl.delProf)

module.exports = router;
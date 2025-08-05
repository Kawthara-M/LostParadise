const router = require("express").Router()
const gamesCtrl = require("./../controllers/games")
const multer = require("./../config/multer")

router.get("/", gamesCtrl.games_read_GET)
router.post("/new", multer.single("image"), gamesCtrl.games_new_POST)
router.get("/search", gamesCtrl.games_search_GET)
router.put("/:id", gamesCtrl.games_edit_PUT)
router.delete("/:id", gamesCtrl.games_delete_delete)

module.exports = router

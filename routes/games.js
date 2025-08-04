const router = require("express").Router()
const gamesCtrl = require("./../controllers/games")

router.get("/", gamesCtrl.games_read_GET)
router.post("/new", gamesCtrl.games_new_POST)
router.put("/:id", gamesCtrl.games_edit_PUT)
router.delete("/:id", gamesCtrl.games_delete_delete)

module.exports = router

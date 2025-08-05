const express = require("express")
const router = express.Router()
const gamesCtrl = require("./../controllers/games")
const multer = require("multer")
const path = require("path")


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploadedImages")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname)
  },
})

const upload = multer({ storage })

// Routes
router.get("/", gamesCtrl.games_read_GET)
router.get("/new", gamesCtrl.games_new_GET)
router.post("/new", upload.single("image"), gamesCtrl.games_new_POST)
router.get("/search", gamesCtrl.games_search_GET)
router.put("/:id", gamesCtrl.games_edit_PUT)
router.delete("/:id", gamesCtrl.games_delete_delete)

module.exports = router

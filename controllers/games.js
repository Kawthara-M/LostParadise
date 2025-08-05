const Game = require("./../models/game")

exports.games_read_GET = async (req, res) => {
    console.log("Rendering /games/new page");
  res.send(await Game.find())
}
exports.games_new_GET =async(req,res)=> {
  res.render("./new.ejs")
}

exports.games_new_POST = async (req, res) => {
  try {
  //  console.log("req.body:", req.body)
   // console.log("req.file:", req.file)

    if (!req.file) {
      return res.status(400).send("Image upload is required.")
    }

    req.body.coordinates = {
      x: req.body.x,
      y: req.body.y,
    }

    req.body.dimentions = {
      width: req.body.width,
      height: req.body.height,
    }

    req.body.image = req.file.filename

    const newGame = await Game.create(req.body)
    res.send(newGame)
  } catch (error) {
    console.error("Upload error:", error)
    res.status(500).send("Server error while creating game")
  }
}


exports.games_edit_PUT = async (req, res) => {
  if (!Game.findById(req.params.id)) {
    return res.send("this game does not exist!")
  }

  req.body.coordinates = {
    x: req.body.x,
    y: req.body.y,
  }
  req.body.dimentions = {
    width: req.body.width,
    height: req.body.height,
  }

  await Game.findByIdAndUpdate(req.params.id, req.body)
  return res.send(await Game.findById(req.params.id))
}

exports.games_delete_delete = async (req, res) => {
  await Game.findByIdAndDelete(req.params.id)
  return res.status(200).send("Game has been deleted successfully")
}

exports.games_search_GET = async (req, res) => {
  let games = []
  if (req.query.q) {
    const searchQuery = req.query.q
    games = await Game.find({
      $or: [
        { name: { $regex: searchQuery, $options: "i" } },
        { description: { $regex: searchQuery, $options: "i" } },
      ],
    })
  }
  res.send(games)
}

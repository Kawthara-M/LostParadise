const Game = require("./../models/game")

exports.games_read_GET = async (req, res) => {
  res.send(await Game.find())
}

exports.games_new_POST = async (req, res) => {
  req.body.coordinates = {
    x: req.body.x,
    y: req.body.y,
  }
  req.body.dimentions = {
    width: req.body.width,
    height: req.body.height,
  }
  req.body.image = req.file.filename
  
  return res.send(await Game.create(req.body))
}

exports.games_edit_PUT = async (req, res) => {
  if (!Game.findById(req.params.id)) {
    return res.send("this game does not exist!")
  }

  req.body.image = req.file.filename

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
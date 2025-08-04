const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  minimumAge: {
    type:Number,
    default: 3
  },
  minimumHeight:{
    type: Number,
    default: 70
  },
  description:{
    type: String,
    required: true
  },
  capacity:{
    type: Number,
    required: true
  },
  coordinates:{
    x: Number,
    y: Number
  }, 
  dimentions: {
    width:Number,
    height: Number
  }

}) 
const Game = mongoose.model("Game", gameSchema) 

module.exports = Game
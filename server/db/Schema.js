var mongoose = require('mongoose');

var sketchSchema = mongoose.Schema({
  picture: [
    [
      {x: Number, y: Number}, 
      {x: Number, y: Number}
    ]
  ]
});

var Sketches = mongoose.model('Sketch', sketchSchema);

module.exports = Sketches;
// var point = new Schema({
//   x: Number
// });

// var chat = new Schema({

// });
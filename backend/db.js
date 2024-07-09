const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://vedantjr2003:HBvCQGkJM4EU9ocg@cluster0.ej1bfeq.mongodb.net/todos");
const todoSchema = mongoose.Schema({

   title: String,
   description: String,
   completed: Boolean

})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
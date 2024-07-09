const express = require('express');
const { createTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors());



app.post('/todo', async function(req,res){

const createPayload = req.body;
const parsedPayload = createTodo.safeParse(createPayload);
if(!parsedPayload.success){
    res.json({
        msg: "you sent wrong inputs "
    })
    return
}
//put data in mongo now 

await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: createPayload.completed
})

res.json({
    msg:"todo Created"
})

})

app.get('/todos',async function(req,res ){

    const todos = await todo.find({});
    
    res.json({
        todos
    })
    
    
    })

app.put('/completed', function (req,res){
const updatePayload = req.body;
const parsedPayload = createTodo.safeParse(updatePayload);
if(!parsedPayload.success){
    res.json({
        msg: "you sent wrong inputs "
    })
    return
}

todo.update({

    _id: req.body.id
},
    {
        completed:true,
})

res.json({
    msg:"todo has been completed"
})  

})



app.listen(4000);

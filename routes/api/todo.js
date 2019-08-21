const express = require("express");
const router =express.Router();

// Load Todo Model
const Todo = require("../../models/Todo")


/**
 *  @Router GET api/todo/test
 *  @Desc Test todo router
 * @access Public
 */
router.get("/test", (req, res) => res.json({ msg: "User calısıyor" }));

router.post("/createTodo",(req,res) => {
    const {content} = req.body
    if(!content) {
        console.log('error')
        return res.json({error:'Sorry'})
    }
    const newTodo = new Todo({
        content
    })
    newTodo
        .save()
        .then(todo =>res.json({todo:newTodo}))
        .catch(err => res.json({msg:'Sorry, Something is wrong.'}))
})
router.post("/deleteTodo",(req,res) => {
    const {id} = req.body
    Todo.findByIdAndDelete(id)
        .then(()=>res.json({msg:'Todo is deleted'}))
        .catch(err => res.json({ msg: 'Sorry, Something is wrong.' }))
})
router.post("/toggleTodo",async(req,res) => {
    const {id} = req.body
    try {
        const todo = await Todo.findById(id)
        todo.completed = !todo.completed;
        const success = await todo.save()
        if (success) {
            if (todo.completed === true) {
                return res.json({ msg: 'Yeeyy,you completed your task' })
            }
            return res.json({ msg: 'Success' })
        }
    } catch (err) {
        res.json({ msg: 'Sorry, Something is wrong.' })
    }
    
})
router.get("/getTodos",async(req,res) => {
    const todos =await Todo.find({})
    res.json({todos})
})
router.post("/changeTodo",async(req,res) => {
    const {id,content} =req.body
    try {
        const todo = await Todo.findById(id)
        if (todo) {
            todo.content = content
            const success = await todo.save()
            if (success) return res.json({ todo: todo })
        }
    } catch (error) {
        res.json({ err:'Sorry, Something is wrong.'})
    }
    

})
    
    





module.exports= router
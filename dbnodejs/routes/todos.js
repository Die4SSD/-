const {Router} = require('express')
const Todo = require('../models/todo.js')
const router = Router()

router.get('/', async (req,res) => {
    const todos = await Todo.find({})
    res.render('index.hbs', {
        title: 'Todos list',
        isIndex: true,
        todos
    })
})

router.get('/create', (req,res) => {
    res.render('create', {
        title: 'Create todos',
        isCreate: true 
    })
})

router.post('/create', async (req,res) => {
    const todo = new Todo({
        title: req.body.fff
    })

    await todo.save()
    res.redirect('/')
})

module.exports = router
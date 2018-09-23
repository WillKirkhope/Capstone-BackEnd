const express = require("express")
const router = express.Router()

const queries = require("../Database/queries")

router.get('/', (req,res,next) => {
    queries.list('posts')
    .then(post => {
        res.json({post})
    })
})

router.get('/:id', function(request,response){
  queries.read("posts", request.params.id).then(post => {
      post
          ? response.json({post})
          : response.status(404).json({message: 'Not found'})
  })
})

router.post('/', function(request,response,next){
  queries.post("posts", request.body)
  .then(newPost => {
    response.status(201).json({newPost})
  })
})

router.put('/:id', function(request,response,next){
  queries.update("posts", request.params.id, request.body)
  .then(updatedForm => response.json(updatedForm))
})

router.delete('/:id', function(request,response,next){
  queries.deleteOne("posts", request.params.id)
  .then(() => {
    response.status(204).json()
  })
})

router.use(function(error,request,response,next){
  console.error(error.stack)
  response.status(400).send('Error Something Went Wrong')
})

 module.exports = router

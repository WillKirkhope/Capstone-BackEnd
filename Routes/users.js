const express = require("express")
const router = express.Router()

const queries = require("../Database/queries")

router.get('/', (req,res,next) => {
    queries.list('users')
    .then(users => {
        res.json({user})
    })
})

router.get('/:id', function(request,response){
  queries.read("users", request.params.id).then(user => {
      user
          ? response.json({user})
          : response.status(404).json({message: 'Not found'})
  })
})

router.post('/', function(request,response,next){
  queries.post("users", request.body)
  .then(newPost => {
    response.status(201).json({newPost})
  })
})

router.put('/:id', function(request,response,next){
  queries.update("users", request.params.id, request.body)
  .then(updatedForm => response.json(updatedForm))
})

router.delete('/:id', function(request,response,next){
  queries.deleteOne("users", request.params.id)
  .then(() => {
    response.status(204).json()
  })
})

router.use(function(error,request,response,next){
  console.error(error.stack)
  response.status(400).send('Error Something Went Wrong')
})

 module.exports = router

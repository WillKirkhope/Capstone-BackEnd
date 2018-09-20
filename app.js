// const express = require('express')
// const app = express()
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const port = parseInt(process.env.PORT || 3000)
//
// app.use(cors())
// app.use(bodyParser.json())
//
// app.get('/', (req,res,next) => {
//       res.json({
//           message: 'Hello World!'
//       });
//     })
//
// app.listen(port, () => {console.log(`Listening on port ${port}`)})


const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const port = process.env.PORT || 9000
const users = require("./routes/users")
const posts = require("./routes/posts")


app.use(cors())
app.use(bodyParser.json())

app.use("/users", users)
app.use("/posts", posts)


app.listen(port, () => {
    console.log(`I am listening on ${port}`)
})


module.exports = app;

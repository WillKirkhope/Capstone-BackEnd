const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const port = process.env.PORT || 9000
const users = require("./Routes/users")
const posts = require("./Routes/posts")


app.use(cors())
app.use(bodyParser.json())

app.use("/users", users)
app.use("/posts", posts)


app.listen(port, () => {
    console.log(`I am listening on ${port}`)
})


module.exports = app;

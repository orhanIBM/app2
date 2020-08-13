
const express = require('express')
var cors = require('cors')


const app = express()
app.use(cors())
const port = 8082

app.get('/', (req, res) => {
  res.send('Alive from 2!')
})

app.get("/response", (req, res)=> {
    res.send("App 2 sends his regards")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

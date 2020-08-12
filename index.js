
const express = require('express')
const app = express()
const port = 8082

app.get('/live', (req, res) => {
  res.send('Alive from 2!')
})

app.get("/response", (req, res)=> {
    res.send("App 2 sends his regards")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


const express = require('express');

const app = express()
const port = 3001


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/api/state/cache', (req,res)=>{
  res.send("hello")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
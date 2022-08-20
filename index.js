const port = 8000

const express = require('express')
const app = express()
app.use(express.json())


app.post("/v1/update", (req, res) => {
   setTimeout(() => {
      res.status(200).json(req.body)
   }, 2000)
})

app.get("/userInfo", (req, res) => {
   setTimeout(() => {
      res.status(200).json({
         name: 'Nhat Hoang',
         age: 22,
         about: "I'm a front-end developer",
         theme: '#ff9051',
         url: "https://www.seanmerricks.com/static/images/artwork/full_size/deadpool_avatar.png",
         loading: false,
         error: false
      })
   }, 1000)
})

app.listen(port, () => {
   console.log('Server is running on port ' + port)
})
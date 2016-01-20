import express from 'express'

const app = express()

app.post('/change', (req, res) => {
  console.log(req.body)
})

app.listen(8080, () => console.log('app live on port :8080'))
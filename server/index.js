import express from 'express'
import router from './routes/lucky.js'

const app = express()
const port = 5000;

app.use('/', router);

app.listen(port, () => {
  console.log(`App running on port: ${port}`)
})
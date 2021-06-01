import express from 'express'
import router from './routes/lucky.js'
import moongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(cors);
const port = process.env.port || 5000;

const CONNECTION_URL = "mongodb+srv://luckypick:luckypick123@luckypick.n7bq5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

moongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(port, () => console.log(`My Server is running on port: ${port}`)))
  .catch((error) => console.log(error.message));


moongoose.set('useFindAndModify', false);

app.use('/lucky', router);
app.use('/', router);


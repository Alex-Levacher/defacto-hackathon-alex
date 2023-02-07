import express from 'express'
import morgan from 'morgan'
import {ask} from './chat.api'

const port = 3000

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.get('/api/hello', (_, response) => response.sendStatus(200))
app.post('/api/ask', ask)

app.listen(port, () => {
  console.log(`Listening for events on ${port}`)
})

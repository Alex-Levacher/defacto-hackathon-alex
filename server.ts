import express from 'express'
import morgan from 'morgan'

const port = 3000

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.get('/api/hello', (_, response) => response.sendStatus(200))
app.post('/api/ask', (request, response) => response.status(200).json({message: 'Un test de message', question: request.body.question}))

app.listen(port, () => {
  console.log(`Listening for events on ${port}`)
})

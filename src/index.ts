import express from 'express'

const app = express()

app.use(express.json())

app.get('/test', async (req, res) => {
  res.json({ message: 'Hello World' })
})

const server = app.listen(3333, () =>
  console.log(`🚀 Server ready at: http://localhost:3333`),
)

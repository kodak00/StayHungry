import express from 'express'

const app = express()

app.get('/', (req, res, next) => {
    console.log('log..')
    res.send('Hello')
})

app.listen(5001, () => {
    console.log('Server running')
})